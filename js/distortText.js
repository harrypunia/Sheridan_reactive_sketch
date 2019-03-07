//THIS CODE WAS WRITTEN BY ME IN DECEMBER 2018.
const toggleDistortedText = () => {
    let test = document.getElementsByTagName('distort-text');
    for (let i = 0; i < test.length; i++) {
        if (test[i].getAttribute('dir') == 'in') {
            test[i].setAttribute('delay', 0);
            test[i].setAttribute('dir', 'out');
        } else {
            test[i].setAttribute('delay', 0.2);
            test[i].setAttribute('dir', 'in');
        }
    }
}
/*Creates a custom HTML tag which can be used to animate text
  Uses attributes to change css and break a sentence into multiple divs in a container*/
class DistortText extends HTMLElement {
    constructor() {
        super();//required to create custom tags
    }
    connectedCallback() {//fetch attributes once tag is created and connected
        this.updateParameters();
        this.hasAttribute('onload') ? this.distortText() : this.hasAttribute('onclick') ? this.addEventListener('click', this.distortText) : 0;
    }
    updateParameters() {//get all parameters from custom HTML tag
        this.text = this.getAttribute('text');
        this.animation = this.getAttribute('dir');
        this.opacity = this.animation == 'in' ? 0 : 1;
        this.delay = this.hasAttribute('delay') ? this.getAttribute('delay') : 0.2;
        this.speed = this.hasAttribute('speed') ? this.getAttribute('speed') : this.text.length;
    }
    static get observedAttributes() {
        return ['dir']
    }
    attributeChangedCallback(name, oldValue, newValue) {//add listener to dir tag to allow "in and out" animations
        if (oldValue != newValue) {
            newValue == "true" ? (this.updateParameters(), this.distortText()) : (this.updateParameters(), this.distortText());
        }
    }
    distortText() { //adds the dics and animations classes with different delays to pull off the effect
        this.letters = '';
        for (let i = 0; i < this.text.length; i++) {
            let delay = (i / parseInt(this.speed) / 2) + parseFloat(this.delay, 10),
                str = this.text[i].replace('_', '&ensp;');
            this.letters += '<div style="opacity: ' + this.opacity + '; animation: distort_' + this.animation + ' .2s ease-out; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>'
        }
        this.innerHTML = this.letters;
    }
}
window.customElements.define('distort-text', DistortText);