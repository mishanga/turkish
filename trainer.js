(function(){

//var counter = 0;

Trainer = function(block) {

    return {
        init: function(lingvo) {
            this._block = $('.' + block);
            this._buttons = this._block.find('.buttons');
            this._show = this._buttons.find('.buttons__show');
            this._next = this._buttons.find('.buttons__next');
            this._card = this._block.find('.card');
            this._word = this._card.find('.card__word');
            this._translate = this._card.find('.card__translate');

            this._prepareWords(lingvo);
            this._next.click({ ctx: this }, this.nextWord);
            this._show.click({ ctx: this }, this.showTranslate);

            this.nextWord();
        },

        _prepareWords: function(lingvo) {
            var words = lingvo.words;
            this._words = [];
            this._translates = [];
            for (i in words) {
                if (words.hasOwnProperty(i)) {
                    this._words.push(i);
                    this._translates.push(words[i]);
                }
            }
        },

        showTranslate: function(e) {
            var _this = e.data.ctx || this;
            _this._translate.html(_this._current[1]);
            _this._buttons.toggleClass('buttons_opened');
        },

        nextWord: function(e) {
            var _this = e && e.data && e.data.ctx || this;
            _this._current = _this.getWord();
            _this._word.html(_this._current[0]);
            _this._translate.html('?');
            e && _this._buttons.toggleClass('buttons_opened');
        },

        getWord: function() {
            var num = Math.round(Math.random() * (this._words.length - 1)),
                reverse = Math.random() > 0.5,
                word = [ this._words[num], this._translates[num] ];
            return reverse ? word.reverse() : word;
        }
    };
};

})();
/*
function init() {
    var i, w,
        show = _get('show'),
        next = _get('next');

    eWord = _get('word');
    eTranslate = _get('translate');
    //eCount = _get('counter');

    for (i in lingvo) {
        if (lingvo.hasOwnProperty(i)) {
            words.push(i);
            translates.push(lingvo[i]);
        }
    }

    _get('total').innerHTML = words.length;

    show.onclick = showWord;
    next.onclick = nextWord;

    nextWord();
}

function _get(name) {
    return document.getElementById(name);
}

function getWord() {
    var num = Math.round(Math.random() * (words.length - 1)),
        reverse = Math.random() > 0.5,
        word = [ words[num], translates[num] ];
    return reverse ? word.reverse() : word;
}

function showWord() {
    eTranslate.innerHTML = currentWord[1];
}

function nextWord() {
    currentWord = getWord();
    eWord.innerHTML = currentWord[0];
    eTranslate.innerHTML = '?';
    eCount.innerHTML = ++count;
}

var eWord,
    eTranslate,
    eCount,
    count = 0,
    currentWord = [],
    words = [],
    translates = [];
*/
