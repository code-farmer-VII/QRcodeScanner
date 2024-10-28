import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://coxsfjxfxapdcirwzdtm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveHNmanhmeGFwZGNpcnd6ZHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMzM1NTgsImV4cCI6MjA0NTcwOTU1OH0.So_BpRUenyAmbM8bbPM_ZOOUrDkfWP5AMAXxEfB2BWQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
