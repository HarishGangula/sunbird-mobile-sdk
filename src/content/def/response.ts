import {ContentSearchCriteria, ContentSearchFilter} from './requests';
import {Content, ContentData} from './content';
import {ContentImportStatus} from '..';

export interface ContentGrouped {
    attribute: string;
    name: string;
    groups?: ContentGrouped[];
    contents?: Content[];
}

export interface ContentSearchResult {
    id: string;
    responseMessageId: string;
    filterCriteria: ContentSearchCriteria;
    request?: { [key: string]: any };
    contentDataList: ContentData[];
    collectionDataList?: ContentData[];
}

export interface SearchResponse {
    id: string;
    params: { resmsgid: string };
    result: {
        count: number,
        content: ContentData[],
        collections: ContentData[],
        facets: ContentSearchFilter[]
    };
}

export interface ChildContent {
    identifier: string;
    name: string;
    objectType: string;
    relation: string;
    index: number;
}

export interface ContentImportResponse {
    identifier: string;
    status: ContentImportStatus;
}

export interface ContentDeleteResponse {
    identifier: string;
    status: ContentDeleteStatus;
}

export enum ContentDeleteStatus {
    NOT_FOUND = -1,
    DELETED_SUCCESSFULLY = 1
}

export interface ContentMarker {
    contentId: string;
    uid: string;
    extraInfoMap: { [key: string]: any };
    marker: number;
}

export interface ContentExportResponse {
    exportedFilePath: string;
}

export interface RelevantContentResponse {
    nextContent?: Content;
    previousContent?: Content;
}

export interface RelevantContentResponsePlayer {
    prev?: { content: Content };
    next?: { content: Content };
}
