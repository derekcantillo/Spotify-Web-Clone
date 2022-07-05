// Generated by https://quicktype.io

export interface AudioSpecific {
    api_warning: string;
    body:        ClipDetails;
}

export interface ClipDetails {
    audio_clip: AudioClipS;
}

export interface AudioClipS {
    id:                    number;
    season_number:         number;
    episode_number:        number;
    title:                 string;
    description:           string;
    formatted_description: string;
    updated_at:            string;
    user:                  User;
    link_style:            string;
    channel:               Channel;
    duration:              number;
    uploaded_at:           string;
    recorded_at:           string;
    uploaded_at_ts:        number;
    recorded_at_ts:        number;
    can_comment:           boolean;
    can_embed:             boolean;
    category_id:           number;
    counts:                Counts;
    urls:                  AudioClipUrls;
    tags:                  any[];
    image_attachment:      number;
    processing_state:      string;
}

export interface Channel {
    id:       number;
    title:    string;
    urls:     ChannelUrls;
    category: number;
}

export interface ChannelUrls {
    detail:     string;
    logo_image: Image;
}

export interface Image {
    original: string;
}

export interface Counts {
    comments: number;
    likes:    number;
}

export interface AudioClipUrls {
    detail:     string;
    high_mp3:   string | null;
    image:      string;
    post_image: Image;
    wave_img:   string;
}

export interface User {
    id:       number;
    username: null;
    urls:     UserUrls;
}

export interface UserUrls {
    profile:       string;
    image:         string;
    profile_image: Image;
}