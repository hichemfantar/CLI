import { SupabaseClient } from '@supabase/supabase-js';
import { program } from 'commander';

export const checkAppExistsAndHasPermission = async (supabase: SupabaseClient, appid: string, apikey: string) => {
  const { data: app, error: dbError0 } = await supabase
    .rpc<string>('exist_app', { appid, apikey });
  if (!app || dbError0) {
    program.error('No permission for this app');
  }
}