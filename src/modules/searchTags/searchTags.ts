import { Component } from '../component';
import html from './searchTags.tpl.html';

class SearchTags extends Component {
    tags = ['чехол iphone 13 pro', 'коляски agex', 'яндекс станция 2'];

    async render() {
        const buttonsText = document.querySelectorAll('.search-tags__button__text');
        let i = 0;
        buttonsText.forEach((buttonText) => {
            buttonText.textContent = this.tags[i];
            i++;
        })
    }
}

export const searchTagsComp = new SearchTags(html);