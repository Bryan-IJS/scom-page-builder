export const EVENT = {
    ON_LOAD: 'ON_LOAD',
    ON_SAVE: 'ON_SAVE',
    ON_CONFIG_SAVE: 'ON_CONFIG_SAVE',
    ON_CONFIG_CHANGE: 'ON_CONFIG_CHANGE',
    ON_PAGING_UPDATE: 'ON_PAGING_UPDATE',
    ON_SWITCH_PAGE: 'ON_SWITCH_PAGE',
    ON_TOGGLE_PAGE_VISIBILITY: 'ON_TOGGLE_PAGE_VISIBILITY',
    ON_UPDATE_SECTIONS: 'ON_UPDATE_SECTIONS',
    ON_HASH_CHANGE: 'ON_HASH_CHANGE',
    ON_PREVIEW: 'ON_PREVIEW',
    ON_ADD_ELEMENT: 'ON_ADD_ELEMENT',
    ON_CLONE: 'ON_CLONE',
    ON_RESIZE: 'ON_RESIZE',
    ON_UPDATE_FOOTER: 'ON_UPDATE_FOOTER',
};

export const DEFAULT_BOXED_LAYOUT_WIDTH = '1200px';
export const DEFAULT_SCROLLBAR_WIDTH = 17;
export const DEFAULT_SIDEBAR_MENU_WIDTH = 350;
export const DEFAULT_FOOTER_HEIGHT = 50;

export const IPFS_UPLOAD_END_POINT = 'https://ipfs-gateway.scom.dev/api/1.0/sync/data';
export const IPFS_GATEWAY_IJS = 'https://ipfs.scom.dev/ipfs/';
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';
export * from './textbox';