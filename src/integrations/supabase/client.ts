// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bcmoeerqlgrrbroliqyq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbW9lZXJxbGdycmJyb2xpcXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3ODM0NzAsImV4cCI6MjA1NTM1OTQ3MH0.paDBxg6BLdrrsPykmlVvNg3K7Hj0arY9AGQxq0CabrE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);