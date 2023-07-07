import styled from 'styled-components';

var templateObject_1;
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

var Wrapper = styled.main(
    templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
        [
            "\n  nav {\n    width: var(--fluid-width);\n    max-width: var(--max-width);\n    margin: 0 auto;\n    height: var(--nav-height);\n    display: flex;\n    align-items: center;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n\n  .page {\n    min-height: calc(100vh - var(--nav-height));\n    display: grid;\n    align-items: center;\n    margin-top: -3rem;\n  }\n\n  h1 {\n    font-weight: 700;\n    span {\n      color: #617A55;\n    }\n  }\n\n  p {\n    color: var(--grey-600);\n  }\n\n  .main-img {\n    display: none;\n    color: yellow;\n  }\n\n  @media (min-width: 992px) {\n    .page {\n      grid-template-columns: 1fr 1fr;\n      column-gap: 3rem;\n    }\n\n    .main-img {\n      display: block;\n    }\n\n    background-color: #FFEAD2;\n  }\n"
        ],
        [
            "\n  nav {\n    width: var(--fluid-width);\n    max-width: var(--max-width);\n    margin: 0 auto;\n    height: var(--nav-height);\n    display: flex;\n    align-items: center;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n\n  .page {\n    min-height: calc(100vh - var(--nav-height));\n    display: grid;\n    align-items: center;\n    margin-top: -3rem;\n  }\n\n  h1 {\n    font-weight: 700;\n    span {\n      color: #617A55;\n    }\n  }\n\n  p {\n    color: var(--grey-600);\n  }\n\n  .main-img {\n    display: none;\n    color: yellow;\n  }\n\n  @media (min-width: 992px) {\n    .page {\n      grid-template-columns: 1fr 1fr;\n      column-gap: 3rem;\n    }\n\n    .main-img {\n      display: block;\n    }\n\n    background-color: #FFEAD2;\n  }\n"
        ]
    ))
);

export default Wrapper;
