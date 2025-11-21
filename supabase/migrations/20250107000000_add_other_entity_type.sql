-- Add 'other' to allowed entity types in business_entities table
-- Drop existing constraint (handle both named and auto-generated constraint names)
DO $$ 
DECLARE
    constraint_name text;
    table_exists boolean;
BEGIN
    -- Check if table exists
    SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'business_entities'
    ) INTO table_exists;
    
    IF table_exists THEN
        -- Find and drop the constraint on business_entities
        SELECT conname INTO constraint_name
        FROM pg_constraint
        WHERE conrelid = 'public.business_entities'::regclass
        AND contype = 'c'
        AND pg_get_constraintdef(oid) LIKE '%entity_type%';
        
        IF constraint_name IS NOT NULL THEN
            EXECUTE format('ALTER TABLE public.business_entities DROP CONSTRAINT %I', constraint_name);
        END IF;
        
        -- Add new constraint with 'other' included
        ALTER TABLE public.business_entities 
        ADD CONSTRAINT business_entities_entity_type_check 
        CHECK (entity_type IN ('customer', 'supplier', 'wholesaler', 'transport', 'labour', 'other'));
    END IF;
END $$;

-- Add 'other' to allowed entity types in invoices table
-- Drop existing constraint (handle both named and auto-generated constraint names)
DO $$ 
DECLARE
    constraint_name text;
    table_exists boolean;
    constraint_found boolean;
BEGIN
    -- Check if table exists
    SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'invoices'
    ) INTO table_exists;
    
    IF table_exists THEN
        -- First, try to drop by exact name
        BEGIN
            ALTER TABLE public.invoices DROP CONSTRAINT IF EXISTS invoices_entity_type_check;
            constraint_found := true;
        EXCEPTION WHEN OTHERS THEN
            constraint_found := false;
        END;
        
        -- Also try to find and drop any constraint with entity_type in the definition
        FOR constraint_name IN
            SELECT conname
            FROM pg_constraint
            WHERE conrelid = 'public.invoices'::regclass
            AND contype = 'c'
            AND (pg_get_constraintdef(oid) LIKE '%entity_type%' OR conname LIKE '%entity_type%')
        LOOP
            BEGIN
                EXECUTE format('ALTER TABLE public.invoices DROP CONSTRAINT IF EXISTS %I', constraint_name);
                constraint_found := true;
            EXCEPTION WHEN OTHERS THEN
                -- Continue if constraint doesn't exist
                NULL;
            END;
        END LOOP;
        
        -- Add new constraint with 'other' included (only if table exists)
        BEGIN
            ALTER TABLE public.invoices 
            ADD CONSTRAINT invoices_entity_type_check 
            CHECK (entity_type IN ('customer', 'supplier', 'wholesaler', 'transport', 'labour', 'other') OR entity_type IS NULL);
        EXCEPTION WHEN duplicate_object THEN
            -- Constraint already exists with different definition, drop and recreate
            ALTER TABLE public.invoices DROP CONSTRAINT IF EXISTS invoices_entity_type_check;
            ALTER TABLE public.invoices 
            ADD CONSTRAINT invoices_entity_type_check 
            CHECK (entity_type IN ('customer', 'supplier', 'wholesaler', 'transport', 'labour', 'other') OR entity_type IS NULL);
        END;
    ELSE
        RAISE NOTICE 'Table public.invoices does not exist. Skipping constraint update.';
    END IF;
END $$;

