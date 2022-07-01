export interface ChannelDB {
    api_warning: string;
    body:        Channel[];
}

export interface Channel {
    type:                  Type;
    id:                    number;
    created_at:            string;
    updated_at:            string;
    title:                 string;
    description:           string;
    formatted_description: string;
    parent_channel_id:     number | null;
    channel_style:         ChannelStyle;
    urls:                  Urls;
    recommendation:        Recommendation;
}

export enum ChannelStyle {
    Messy = "messy",
    Podcast = "podcast",
}

export interface Recommendation {
    position:       number;
    category_id:    number;
    default_follow: boolean;
}

export enum Type {
    Channel = "Channel",
}

export interface Urls {
    web_url:      string;
    logo_image:   Image;
    banner_image: Image;
}

export interface Image {
    original: null | string;
}