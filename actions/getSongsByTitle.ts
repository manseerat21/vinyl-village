import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: { session },
      } = await supabase.auth.getSession();

    if (!title) {
        const allSongs = await getSongs();
    }

    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false});

    if (error) {
        console.log(error);
    }

    return (data as any) || [];

};

export default getSongsByTitle;