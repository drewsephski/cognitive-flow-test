// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://akbwdqxmrutmnpwqanis.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYndkcXhtcnV0bW5wd3FhbmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzODE1ODYsImV4cCI6MjA2Mzk1NzU4Nn0.bUlkp7lE2a3oadonvV8xGnM0aBGWMGwffxbWvObbv_I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);