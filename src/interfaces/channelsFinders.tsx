// Generated by https://quicktype.io

export interface ChannelFind {
    window:      number;
    version:     number;
    timestamp:   number;
    api_warning: string;
    body:        Canales;
}

export interface Canales {
    totals:   Totals;
    channels: ChannelF[];
}

export interface ChannelF {
    id:                    number;
    channel_id:            number;
    stream_id:             number;
    submission_style:      SubmissionStyle;
    channel_style:         ChannelStyle;
    public_read:           boolean;
    writable:              boolean;
    parent_channel_id:     number | null;
    created_at:            string;
    updated_at:            string;
    title:                 string;
    description:           string;
    formatted_description: string;
    urls:                  Urls;
    category?:             Category;
}

export interface Category {
    id:          number;
    title:       string;
    description: null | string;
    updated_at:  string;
    priority:    number;
}

export enum ChannelStyle {
    Messy = "messy",
    Podcast = "podcast",
}

export enum SubmissionStyle {
    None = "none",
}

export interface Urls {
    web_url:      string;
    logo_image:   Image;
    banner_image: Image;
}

export interface Image {
    original: string;
}

export interface Totals {
    count:  number;
    offset: number;
}
