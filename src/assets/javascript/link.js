// @ts-check

export default class Link {
    /**
     * @constructor
     * @param {string} link 
     * @param {boolean} tab 
     */
    constructor(link, tab) {
        this.link = link
        this.tab = tab

        this.openLinkUrl()
    }

    // Open the url in a new tab or in
    // the current tab ba
    openLinkUrl = () => {
        if(this.tab){
            window.open(this.link)
        } else {
            window.location.href = this.link
        }
    }
}