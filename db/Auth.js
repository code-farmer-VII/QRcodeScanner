import { supabase } from "./supaconfigration";

export async function signUpWithEmail(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) {
      console.error('Error signing up:', error.message);
      return { error };
    } else {
      console.log('Sign-up successful:', data);
      return { data };
    }
  }


  export async function logInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      console.error('Error logging in:', error.message);
      return { error };
    } else {
      console.log('Login successful:', data);
      return { data };
    }
  }
  
  