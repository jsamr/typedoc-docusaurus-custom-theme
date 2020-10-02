import type { ComponentPropsWithoutRef } from 'react';
import type { ComponentType } from 'react';
import type { ElementRef } from 'react';
import type { ForwardRefExoticComponent } from 'react';
import type { Ref } from 'react';
import type { RefAttributes } from 'react';

/**
 * Named parameters for autoheight hook.
 *
 * @typeparam S - The type of the `Webshell` props used by this hook.
 *
 * @public
 */
export declare interface AutoheightParams<S extends WebshellProps<MinimalWebViewProps, Feature<any, any>[]>> {
    /**
     * It's best to pass all props directed to `Webshell` here. This is
     * advised because the hook might react to specific props and warn you of
     * some incompatibilities.
     */
    webshellProps: S;
    /**
     * By default, the width of `Webshell` will grow to the horizontal space available.
     * This is realized with `width: '100%'` and `alignSelf: 'stretch'`.
     * If you need to set explicit width, do it here.
     */
    width?: number;
    /**
     * The height occupied by the `WebView` prior to knowing its content height.
     * It will be reused each time the source changes.
     *
     * @defaultValue 0
     */
    initialHeight?: number;
    /**
     * When a width change is detected on viewport, the height of the `WebView`
     * will be set to `undefined` for a few milliseconds. This will allow the
     * best handling of height constraint in edge-cases with, for example,
     * content expanding vertically (display: flex), at the cost of a small flash.
     *
     * @defaultValue true
     */
    resetHeightOnViewportWidthChange?: boolean;
}

/**
 * The state returned by {@link useAutoheight} hook.
 *
 * @typeparam S - The type of the `Webshell` props used by this hook.
 *
 * @public
 */
export declare interface AutoheightState<S extends WebshellProps<MinimalWebViewProps, [ExtractFeatureFromClass<typeof HandleHTMLDimensionsFeature>]>> {
    /**
     * The props to inject into webshell in order to support "autoheight"
     * behavior.
     */
    autoheightWebshellProps: Pick<S, 'webshellDebug' | 'onDOMHTMLDimensions' | 'style' | 'scalesPageToFit' | 'showsVerticalScrollIndicator' | 'disableScrollViewPanResponder'> & Partial<S>;
    /**
     * The implementation used to generate resize events.
     */
    resizeImplementation: HTMLDimensionsImplementation | null;
    /**
     * An object describing the content size. When the size is not yet known,
     * this object fields will be undefined.
     */
    contentSize: Partial<DOMRectSize>;
    /**
     * The state of synchronization between viewport and content size:
     *
     * - `'init'`: the initial, "onMount" state;
     * - `'syncing'`: the content size is being determined;
     * - `'synced'`: the viewport size has been adjusted to content size.
     *
     */
    syncState: AutoheightSyncState;
}

/**
 * The state of synchronization between viewport and content size:
 *
 * - init: the initial, "onMount" state;
 * - syncing: the content size is being determined;
 * - synced: the viewport size has been adjusted to content size.
 *
 * @public
 */
export declare type AutoheightSyncState = 'init' | 'syncing' | 'synced';

/**
 * @public
 */
export declare interface CSSBox {
    width: number;
    height: number;
}

/**
 * Computed styles which affect the CSS Box dimensions.
 * See {@link https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle | window.getComputedStyle()}.
 *
 * @public
 */
export declare interface CSSBoxDimensionsComputedStyle {
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    borderTopWidth: number;
    borderBottomWidth: number;
    borderLeftWidth: number;
    borderRightWidth: number;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}

/**
 * A request to select a collection of elements in the DOM.
 *
 * @remarks
 * A string will be interpreted as a “query” request.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll() } and {@link DOMElementQueryRequest}.
 *
 * @public
 */
export declare type DOMCollectionRequest = DOMElementQueryRequest | DOMElementClassNameRequest | DOMElementTagNameRequest | string;

/**
 * A request by one or many case-sensitive class names, separated by spaces.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName | Document.getElementsByClassName() }
 *
 * @public
 */
export declare type DOMElementClassNameRequest = {
    className: string;
};

/**
 * A request by id (case-insensitive);
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById | Document.getElementById() }
 *
 * @public
 */
export declare type DOMElementIdRequest = {
    id: string;
};

/**
 * A request by query string.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll() }
 * and {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector | Document.querySelector() }
 *
 * @public
 */
export declare type DOMElementQueryRequest = {
    query: string;
};

/**
 * A request to select one element in the DOM.
 *
 * @remarks
 * A string will be interpreted as a “query” request.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector | Document.querySelector() } and {@link DOMElementQueryRequest}.
 *
 * @public
 */
export declare type DOMElementRequest = DOMElementQueryRequest | DOMElementClassNameRequest | DOMElementIdRequest | DOMElementTagNameRequest | string;

/**
 * A query by tag name.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName | Document.getElementsByTagName() }
 *
 * @remarks
 * `'html'` will select `document.documentElement`.
 *
 * @public
 */
export declare type DOMElementTagNameRequest = {
    tagName: string;
};

/**
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | DOMRect}.
 *
 * @public
 */
export declare interface DOMRect extends DOMRectSize {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

/**
 * @public
 */
export declare interface DOMRectSize {
    width: number;
    height: number;
}

/**
 * A collection of utilities to manipulate the DOM.
 *
 * @public
 */
export declare interface DOMUtils {
    /**
     * Get one element in the DOM from a request. See {@link DOMElementRequest}.
     *
     * @returns An {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement | HTMLElement} or `null`.
     */
    getDOMSelection(selector: DOMElementRequest): HTMLElement | null;
    /**
     * Get a collection of live elements in the DOM from a query request.
     *
     * @param selector - Which elements should be returned?
     * @returns A live {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection | HTMLCollection}.
     */
    getDOMSelectionAll(selector: DOMElementQueryRequest | string): any;
    /**
     * Get a collection of static elements in the DOM from a class or tag-name request.
     *
     * @param selector - Which elements should be returned?
     * @returns A static {@link https://developer.mozilla.org/en-US/docs/Web/API/NodeList | NodeList}.
     */
    getDOMSelectionAll(selector: DOMElementClassNameRequest | DOMElementTagNameRequest): any;
    /**
     * @param style - The style to parse, e.g. `'18px'`
     *
     * @returns Numeric value in CSS pixels.
     */
    numericFromPxString(style: string): number;
}

/**
 * An object describing an element CSS Box dimensions, see
 * {@link https://drafts.csswg.org/css2/#box-model | CSS 2 (Box model)}.
 *
 * @remarks
 *
 * This object scalar units are CSS pixels.
 *
 * @public
 */
export declare interface ElementCSSBoxDimensions {
    /**
     * A box formed by `scrollWidth` and `scrollHeight` element properties.
     *
     * @remarks
     * The box is formed with all the space occupied by element's children, even
     * when overflowing. The element padding, border and scrollbar are not
     * counted. See
     * {@link https://drafts.csswg.org/cssom-view/#dom-element-scrollwidth},
     * `scrollWidth` and `scrollHeight` for a reference.
     */
    scrollBox: CSSBox;
    /**
     * The border box as specified in the
     * {@link https://drafts.csswg.org/css-box-3/#valdef-box-border-box | CSS Box Model}.
     *
     * @remarks
     * Margin, padding and content boxes can be derived from
     * {@link ElementCSSBoxDimensions.computedStyle}.
     */
    borderBox: CSSBox;
    /**
     * The computed box style. See
     * {@link https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle | window.getComputedStyle()}.
     *
     * @remarks
     * Be aware that the computed vertical margins might collapse in the
     * viewport. See
     * {@link https://drafts.csswg.org/css2/#collapsing-margins | CSS 2 (collapsing margins)}
     */
    computedStyle: CSSBoxDimensionsComputedStyle;
    /**
     * The width of the horizontal scrollbar.
     *
     * @remarks
     * In the CSS Box model, scrollbars are part of the content box.
     */
    horizontalScrollbarWidth: number;
    /**
     * The width of the vertical scrollbar.
     *
     * @remarks
     * In the CSS Box model, scrollbars are part of the content box.
     */
    verticalScrollbarWidth: number;
}

/**
 * A lookup type to extract the instance from a {@link FeatureClass}.
 *
 * @public
 */
export declare type ExtractFeatureFromClass<F> = F extends FeatureClass<infer O, infer S, infer W> ? Feature<O, S, W> : never;

/**
 * A lookup type to infer the additional props from a feature.
 *
 * @public
 */
declare type ExtractPropsFromFeature<F> = F extends Feature<any, infer P, any> ? ExtractPropsFromSpecs<P> : {};

/**
 * A lookup type to extract props from {@link PropsSpecs}.
 *
 * @public
 */
export declare type ExtractPropsFromSpecs<S> = S extends PropsSpecs<infer N, any> ? S[N] extends never ? {} : Required<S[N]>['signature'] : never;

/**
 * A lookup type to extract Web Handler specs from {@link WebHandlerDefinition}.
 *
 * @public
 */
export declare type ExtractWebHandlerSpecFromDef<S> = S extends WebHandlerDefinition<infer P, infer I> ? {
    [k in I]: WebHandlerDefinition<P, I>;
} : never;

/**
 * A lookup type to extract Web handler specs from {@link Feature}.
 *
 * @public
 */
export declare type ExtractWebHandlerSpecsFromFeature<F> = F extends Feature<any, any, infer P> ? P : never;

/**
 * A lookup type to get the shell component from `WebView` and feature classes.
 *
 * @example
 *
 * ```ts
 * type MyShellComponent = ExtractWebshellFromFeatClass<
 *  typeof WebView,
 *  [typeof HandleElementCSSBoxFeature]
 * >;
 * ```
 *
 * @typeparam C - The type of the `WebView` component.
 * @typeparam F - The type for a collection of features classes.
 *
 * @public
 */
export declare type ExtractWebshellFromFeatClass<C extends ComponentType<any>, F extends FeatureClass<any, any, any>[]> = WebshellComponent<C, ExtractFeatureFromClass<F[number]>[]>;

/**
 * A feature encapsulates injectable behaviors in a WebView.
 *
 * @remarks
 * You should never instantiate that class directly. Use {@link FeatureBuilder} instead.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 * @typeparam P - A type specifying the new properties added to the shell (capabilities to send message to the shell).
 * @typeparam W - A type specifying the Web handlers added to the shell (capabilities to send message to the Web script).
 *
 * @public
 */
export declare abstract class Feature<O extends {} = {}, P extends PropsSpecs<any, any> = {}, W extends WebHandlersSpecs<any> = {}> implements FeatureDefinition<O> {
    /**
     * The string containing valid ECMAScript 5 to be run in the WebView.
     *
     * @remarks
     * The script must define a single function which only argument is of the
     * type {@link WebjsContext}.
     *
     * It is recommended that you use eslint to validate this script syntax, and
     * event better, unit-test the script. See our repository home page for more
     * information.
     */
    readonly script: string;
    /**
     * A unique identifier of the feature. The convention is to use a reverse
     * namespace domain ending with the feature name.
     *
     * @example
     * org.formidable-webview/webshell.link-press
     */
    readonly identifier: string;
    /**
     * An object specifying which props this feature will add to the shell.
     */
    readonly propSpecs: P;
    /**
     * An object specifying which handlers this feature Web script will support.
     */
    readonly webSpecs: W;
    /**
     * These options will be shallow-merged with the options provided to the {@link FeatureClass}.
     */
    readonly defaultOptions: Required<O>;
    /**
     * The options that will be passed to the Web script.
     */
    readonly options: O;
    protected constructor(params: FeatureDefinition<O> & {
        propSpecs: P;
        webSpecs: W;
    }, options: O);
    /**
     * @internal
     */
    hasWebHandler(handlerId: string): boolean;
}

/**
 * A utility to create feature classes.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 * @typeparam S - A type specifying the new properties added to the shell (capabilities to send message to the shell).
 * @typeparam W - A type specifying the Web handlers added to the shell (capabilities to send message to the Web script).
 *
 * @public
 */
export declare class FeatureBuilder<O extends {} = {}, S extends PropsSpecs<any, any> = {}, W extends WebHandlersSpecs<any> = {}> {
    private config;
    /**
     *
     * @param config - An object to specify attributes of the feature.
     */
    constructor(config: FeatureBuilderConfig<O>);
    /**
     * Instruct that the shell will receive events from the Web, and provide a
     * new handler prop for that purpose.
     *
     * @param propName - The name of the handler prop added to the shell.
     * It is advised to follow the convention of prefixing all these handlers
     * with `onDom` to avoid collisions with `WebView` own props.
     * @param handlerId - The unique identifier of the handler that will be used by the Web
     * script to post a message. If none is provided, fallback to `"default"`.
     *
     * @typeparam N - A type to define the name of the prop.
     * @typeparam P - A type describing the shape of payloads sent to shell handlers.
     */
    withShellHandler<P, N extends string>(propName: N, handlerId?: string): FeatureBuilder<O, S & PropsSpecs<N, (p: P) => void>, W>;
    /**
     * Instruct that the Web script will receive events from the shell.
     * See {@link WebshellInvariantProps.webHandleRef}, {@link WebHandle.postMessageToWeb} and {@link WebjsContext.onShellMessage}.
     *
     * @param handlerId - The name of the handler in the Web script.
     *
     * @typeparam I - A type for the unique handler identifier to disambiguate between messages sent to Web handlers.
     * @typeparam P - A type describing the shape of payloads sent to Web handlers.
     */
    withWebHandler<P = undefined, I extends string = string>(handlerId: I): FeatureBuilder<O, S, W & { [k in I]: WebHandlerDefinition<P, I>; }>;
    /**
     * Assemble this builder object into a feature class.
     */
    build(): FeatureClass<O, S, W>;
}

/**
 * See {@link FeatureBuilder}.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 *
 * @public
 */
export declare interface FeatureBuilderConfig<O extends {}> extends FeatureDefinition<O> {
    /**
     * @internal
     */
    __propSpecs?: PropsSpecs<any, any>;
    /**
     * @internal
     */
    __webSpecs?: WebHandlersSpecs<any>;
}

/**
 * A feature constructor function, aka class.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 * @typeparam P - A type specifying the new properties added to the shell (capabilities to send message to the shell).
 * @typeparam W - A type specifying the Web handlers added to the shell (capabilities to send message to the Web script).
 *
 * @public
 */
export declare interface FeatureClass<O extends {} = {}, P extends PropsSpecs<any, any> = {}, W extends WebHandlersSpecs<any> = {}> {
    new (...args: O extends Partial<O> ? [] | [O] : [O]): Feature<O, P, W>;
    name: string;
    identifier: string;
}

/**
 * A minimal set of attributes to define a feature.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 *
 * @public
 */
export declare type FeatureDefinition<O extends {}> = {
    /**
     * The string containing valid ECMAScript 5 to be run in the WebView.
     *
     * @remarks
     * The script must define a single function which only argument is of the
     * type {@link WebjsContext}.
     *
     * It is recommended that you use eslint to validate this script syntax, and
     * event better, unit-test the script. See our repository home page for more
     * information.
     */
    readonly script: string;
    /**
     * A unique identifier of the feature. The convention is to use a reverse
     * namespace domain ending with the feature name.
     *
     * @example
     * org.formidable-webview/webshell.link-press
     */
    readonly identifier: string;
    /**
     * These options will be shallow-merged with the options provided to the {@link FeatureClass}.
     */
    readonly defaultOptions: Required<O>;
};

/**
 * This feature sets element size programmatically and only once, when
 * {@link https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded | DOMContentLoaded}
 * has been fired.
 *
 * @public
 */
export declare const ForceElementSizeFeature: FeatureClass<ForceElementSizeOptions>;

/**
 * An object describing customization for the force body feature.
 *
 * @public
 */
export declare interface ForceElementSizeOptions {
    /**
     * The element to target.
     */
    target: DOMElementRequest;
    /**
     * The width to override.
     *
     * @defaultvalue 'auto'
     */
    widthValue?: number | string;
    /**
     * The height to override.
     *
     * @defaultvalue 'auto'
     */
    heightValue?: number | string;
    /**
     * Force body width to `widthValue`.
     *
     * @defaultvalue true
     */
    forceWidth?: boolean;
    /**
     * Force body width to `heightValue`.
     *
     * @defaultvalue true
     */
    forceHeight?: boolean;
    /**
     * When no element is found matching the target, should the script raise an
     * error?
     *
     * @defaultValue false
     */
    shouldThrowWhenNotFound?: boolean;
}

/**
 * This feature inserts or replace a meta element looking like:
 *
 * ```html
 * <meta name="viewport" content="width=device-width" />
 * ```
 *
 * This will guarantee that the layout viewport will match
 * device-width (hence, “responsive”). Minimum scale is locked to 1, but you
 * can customize maximum scale to allow pinch-zoom gestures.
 * See {@link https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag | MDN—Using the viewport meta tag ...}
 *
 * @public
 */
export declare const ForceResponsiveViewportFeature: FeatureClass<ForceResponsiveViewportOptions>;

/**
 * An object describing customization for the fix viewport feature.
 *
 * @public
 */
export declare interface ForceResponsiveViewportOptions {
    /**
     * Maximum pinch-zoom scale.
     *
     * @defaultvalue 1
     */
    maxScale?: number;
}

/**
 * An object describing customization for the dimensions feature.
 *
 * @public
 */
export declare interface HandleElementCSSBoxDimensionsOptions {
    /**
     * The element to target. This argument is required.
     */
    target: DOMElementRequest;
    /**
     * When no elements are found matching the target, should the script
     * raise an error?
     *
     * @defaultValue false
     */
    shouldThrowWhenNotFound?: boolean;
}

/**
 * This feature enables receiving the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model | CSS Box dimensions} of an element in the
 * `WebView` pixels unit. The first element matching the provided tagName is
 * retained. A new event will be triggered on every resize.
 *
 * @remarks
 * If you are looking for the document content size, use {@link HandleHTMLDimensionsFeature} instead.
 *
 * @public
 */
export declare const HandleElementCSSBoxFeature: FeatureClass<HandleElementCSSBoxDimensionsOptions, {
    onDOMElementCSSBoxDimensions: PropDefinition<'onDOMElementCSSBoxDimensions', (e: ElementCSSBoxDimensions) => void>;
}>;

/**
 * This feature allows to intercept hashchange events, when the hash fragment of the URL changes.
 * This could happen when the user clicks on anchors like this:
 *
 * ```html
 * <a href="#subresource">Let's Jump to Subresource</a>
 * ```
 *
 * Or when JavaScript code imperatively changes the hash fragment of current location.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event | MDN—hashchange event}.
 *
 * @public
 */
export declare const HandleHashChangeFeature: FeatureClass<HandleHashChangeOptions, {
    onDOMHashChange: PropDefinition<'onDOMHashChange', (e: HashChangeEvent) => void>;
}>;

/**
 * An object describing customization for the hash change feature.
 *
 * @public
 */
export declare interface HandleHashChangeOptions {
    /**
     * Reset the hash to the empty string after triggering the event.
     * This is recommended if you want to make sure any upcoming link press on
     * an anchor with a local hash `href` will trigger the `hashchange` event.
     *
     * @defaultValue false
     */
    shouldResetHashOnEvent?: boolean;
}

/**
 * This feature enables receiving various dimensions relative to the layout. The events
 * will only be fired when a change is observed to either the layout or the content size.
 *
 * @remarks
 * If you need to guarantee that 1 CSS pixel = 1 Device pixel, you should use this
 * feature with a meta tag viewport setting width to device width.
 * See {@link ForceResponsiveViewportFeature}
 *
 * @public
 */
export declare const HandleHTMLDimensionsFeature: FeatureClass<HandleHTMLDimensionsOptions, {
    onDOMHTMLDimensions: PropDefinition<'onDOMHTMLDimensions', (d: HTMLDimensions) => void>;
}>;

/**
 * Options for {@link HandleHTMLDimensionsFeature}.
 *
 * @public
 */
export declare interface HandleHTMLDimensionsOptions {
    /**
     * Force a specific implementation, if the underlying API is available.
     *
     * @remarks
     *
     * This option is useful in development to force one implementation to mock older browsers.
     *
     * @defaultValue false
     */
    forceImplementation?: HTMLDimensionsImplementation | false;
    /**
     * In polling mode, at which interval should the dimensions be retrieved?
     *
     * @remarks
     * A value of 0 will disable polling.
     *
     * @defaultValue 200
     */
    pollingInterval?: number;
    /**
     * The minimum difference between two updates' dimensions to trigger a change
     * event.
     *
     *
     * @defaultValue 0
     */
    deltaMin?: number;
}

/**
 * This feature allows to intercept clicks on anchors such as:
 *
 * ```html
 * <a href="https://domain.com/">Let's Travel</a>
 * ```
 *
 * @remarks
 * By default, it will prevent the click from propagating. But you can disable
 * this option.
 *
 * If you need to intercept click on hash fragments, consider {@link HandleHashChangeFeature} instead.
 *
 * @public
 */
export declare const HandleLinkPressFeature: FeatureClass<LinkPressOptions, {
    onDOMLinkPress: PropDefinition<'onDOMLinkPress', (t: LinkPressTarget) => void>;
}>;

/**
 * This feature adds a handler triggered when the visual viewport changes. It
 * requires `VisualViewport` API support on browsers (iOS Safari 13 and Android
 * WebView 62).
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport | VisualViewport API}.
 *
 * @public
 *
 */
export declare const HandleVisualViewportFeature: FeatureClass<{}, {
    onDOMVisualViewport: PropDefinition<'onDOMVisualViewport', (d: VisualViewportDimensions) => void>;
}>;

/**
 * A hash change event.
 *
 * @public
 */
export declare interface HashChangeEvent {
    /**
     * The hash (“#” included).
     */
    hash: string;
    /**
     * The bounding rectangle of the element targeted by hash.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | Element.getBoundingClientRect()}
     */
    targetElementBoundingRect: DOMRect;
}

/**
 * An object describing various dimensions of the HTML layout.
 *
 * @remarks
 * This object units are in CSS pixels. CSS pixels match device pixels when the
 * web page has a `<meta name="viewport" content="width=device-width" />` tag.
 *
 * @public
 */
export declare interface HTMLDimensions {
    /**
     * The layout viewport size, e.g. the size of the WebView in device pixels.
     */
    layoutViewport: DOMRectSize;
    /**
     * The content size, e.g. the size of the body element in CSS pixels.
     */
    content: DOMRectSize;
    /**
     * Which implementation has been used to generate this event?
     * See {@link HTMLDimensionsImplementation}.
     */
    implementation: HTMLDimensionsImplementation;
}

/**
 * The script will check for different APIs in order to
 * implement the notification of HTML dimensions changes. By order of preference:
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | ResizeObserver} (resize),
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MutationObserver}
 * (mutation) and polling.
 *
 * @public
 */
export declare type HTMLDimensionsImplementation = 'resize' | 'mutation' | 'polling';

/**
 * An object describing customization for the linkPress feature.
 *
 * @public
 */
export declare interface LinkPressOptions {
    /**
     * Prevent click events on anchors to propagate.
     *
     * @defaultValue true
     */
    preventDefault?: boolean;
    /**
     * Don't trigger an event when the target `href` is inside the page, e.g.
     * `#top`. See also {@link HandleHashChangeFeature}.
     *
     * @defaultValue true
     */
    ignoreHashChange?: boolean;
}

/**
 * The target of a link press event.
 *
 * @public
 */
export declare interface LinkPressTarget {
    /**
     * The full URI of the target.
     */
    uri: string;
    /**
     * The URI scheme.
     */
    scheme: string;
    /**
     * The exact content of the `href` attribute.
     */
    hrefAttribute: string;
    /**
     * The bounding rectangle of the anchor which has been clicked.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | Element.getBoundingClientRect()}
     */
    clickedAnchorBoundingRect: DOMRect;
    /**
     * An object describing the page location from which the click originated.
     */
    page: {
        /**
         * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Location/origin}.
         *
         * @remarks
         * Has the special value `null` when not bound to a URL (`{ html }` source).
         */
        origin: string | null;
        /**
         * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Location/href}.
         *
         * @remarks
         * Has the special value `about:blank` when not bound to a URL (`{ html }` source).
         */
        href: string;
    };
}

/**
 * Creates a React component which decorates `WebView` component with additional
 * capabilities such as:
 *
 * - handling messages from the Web environment;
 * - sending messages to the Web environment, see {@link WebHandle};
 * - running script in the Web environment.
 *
 * @param WebView - A `WebView` component, typically exported from `react-native-webview`.
 * @param features - Features to inject in the `WebView`.
 *
 * @typeparam C - The type of the `WebView` component.
 * @typeparam F - The type for a collection of features to inject.
 *
 * @example
 *
 * ```ts
 * import {
 *   makeWebshell,
 *   HandleHashChangeFeature,
 *   HandleVisualViewportFeature
 * } from '@formidable-webview/webshell';
 *
 * const Webshell = makeWebshell(
 *   WebView,
 *   new HandleHashChangeFeature(),
 *   new HandleVisualViewportFeature()
 * );
 * ```
 *
 * @public
 */
declare function makeWebshell<C extends ComponentType<any>, F extends Feature<{}, {}, {}>[]>(WebView: C, ...features: F): WebshellComponent<C, F>;
export default makeWebshell;
export { makeWebshell }

/**
 * A high-compatibility type expressing minimal requirements for the
 * WebView Component's props.
 *
 * @public
 */
export declare interface MinimalWebViewProps {
    readonly onMessage?: unknown;
    readonly onError?: unknown;
    readonly injectedJavaScript?: unknown;
    readonly javaScriptEnabled?: unknown;
    readonly source?: Record<string, any>;
    readonly style?: unknown;
    readonly onNavigationStateChange?: unknown;
    readonly scalesPageToFit?: unknown;
    readonly showsVerticalScrollIndicator?: unknown;
    readonly disableScrollViewPanResponder?: unknown;
}

/**
 * An object to define an API to send messages from Web to shell.
 *
 * @typeparam N - A type to define the name of the prop.
 * @typeparam P - A type describing the shape of the prop.
 *
 * @public
 */
export declare type PropDefinition<N extends string, P> = {
    handlerId: string;
    type: 'handler' | 'inert';
    featureIdentifier: string;
    name: N;
    signature?: Partial<Record<N, P>>;
};

/**
 *
 * @typeparam N - A type to define the names of the props.
 * @typeparam P - A type describing the shapes of the props.
 *
 * @public
 */
export declare type PropsSpecs<N extends string, P> = {
    [k in N]: PropDefinition<k, P>;
};

/**
 * Requires {@link HandleHTMLDimensionsFeature} and recommends
 * {@link ForceResponsiveViewportFeature}.
 *
 * @remarks
 * This hook has caveats you must understand:
 *
 * - Because the viewport height is now bound to the content heigh, you cannot
 *   and must not have an element which height depends on viewport, such as
 *   when using `vh` unit or `height: 100%;` on body. That will either create
 *   an infinite loop, or a zero-height page (this happens for Wikipedia).
 *   Hence, it is strongly advised that you use autoheight only with content
 *   you have been able to test. This can be worked around by forcing body
 *   height to 'auto', see {@link ForceElementSizeFeature}.
 * - In some circumstances, the mobile browser might use a virtual
 *   viewport much larger then the available width in the <WebView />, often
 *   around 980px for websites which have been built for desktop. For
 *   this autoheight component to be reliable, you must ensure that the
 *   content has a [meta viewport element](https://www.w3schools.com/css/css_rwd_viewport.asp)
 *   in the header. You can enforce this behavior with {@link ForceResponsiveViewportFeature}.
 *
 * @example
 *
 * ```tsx
 * export default function MinimalAutoheightWebView(
 *   webshellProps: ComponentProps<typeof Webshell>
 * ) {
 *   const { autoheightWebshellProps } = useAutoheight({
 *     webshellProps
 *   });
 *   return <Webshell {...autoheightWebshellProps} />;
 * }
 * ```
 *
 * @param params - The parameters to specify autoheight behavior.
 *
 * @typeparam S - The type of the `Webshell` props used by this hook.
 *
 * @returns - An object to implement autoheight behavior.
 *
 * @beta
 */
export declare function useAutoheight<S extends WebshellProps<MinimalWebViewProps, [ExtractFeatureFromClass<typeof HandleHTMLDimensionsFeature>]>>(params: AutoheightParams<S>): AutoheightState<S>;

/**
 * An object describing the visual viewport of the `WebView`.
 *
 * @public
 */
export declare interface VisualViewportDimensions {
    /**
     * The visual viewport scale. Because this API is quite recent, we have a
     * fallback strategy to compute scale.
     *
     * @remarks
     * The other values in this object are already in React Native dpi units.
     */
    scale: number;
    /**
     * window.visualViewport.width and window.visualViewport.height
     */
    visualViewport: DOMRectSize;
    /**
     * `false` when these values are coming from the VisualViewport API and
     * `true` when they are "best guess". In legacy mode, be warned that you will
     * not receive frequent updates when the user pinch-zoom.
     */
    isLegacy: boolean;
}

/**
 * An object to send messages from the shell to the Web.
 *
 * @public
 */
export declare interface WebHandle {
    /**
     *
     * @param feat - The feature to which a message should be sent.
     * @param handlerId - The handler identifier used in the Web script to register a listener.
     * @param payload - The type of the message to sent.
     */
    postMessageToWeb<F extends Feature<any, any, any>, H extends keyof ExtractWebHandlerSpecsFromFeature<F>>(feat: F, handlerId: H, payload: Required<ExtractWebHandlerSpecsFromFeature<F>[H]>['payload']): void;
}

/**
 * An object to define an API to send messages from shell to Web.
 *
 * @typeparam I - A type for the unique handler identifier to disambiguate between messages sent to Web handlers.
 * @typeparam P - A type describing the shape of payloads sent to Web handlers.
 *
 * @public
 */
export declare interface WebHandlerDefinition<P, I extends string> {
    handlerId: I;
    payload?: P;
    async: false;
}

/**
 * An object describing the structure of messages a feature Web script can handle.
 *
 * @typeparam I - A type for the unique handler identifier to disambiguate between messages sent to Web handlers.
 * @typeparam P - A type describing the shape of payloads sent to Web handlers.
 *
 * @public
 */
export declare type WebHandlersSpecs<P = {}, I extends string = string> = {
    [k in I]: WebHandlerDefinition<P, I>;
};

/**
 * This type specifies the shape of the object passed to Web features scripts.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object given by the shell.
 *
 * @public
 */
export declare interface WebjsContext<O extends {}> {
    /**
     * The options to customize the script behavior.
     */
    readonly options: O;
    /**
     * Instruct the shell to call **the default handler** associated with
     * this feature, if any.
     *
     * @param payload - The value which will be passed to the handler.
     */
    postMessageToShell<P>(payload: P): void;
    /**
     * Instruct the shell to call the handler associated with this
     * feature and `eventId`, if any.
     *
     * @param handlerId - A unique string to disambiguate between different shell handlers.
     * You can omit this param if you are sending to `"default"` handler.
     * @param payload - The value which will be passed to the handler.
     */
    postMessageToShell<P>(handlerId: string, payload: P): void;
    /**
     * Register a handler on messages sent from the shell.
     *
     * @param handlerId - A unique string to disambiguate between different Web handlers.
     * @param payload - The value which will be passed to the handler.
     */
    onShellMessage<P>(handlerId: string, handler: (payload: P) => void): void;
    /**
     * Create a function which execute a callback in a try-catch block that will
     * grab errors en send them to the `Webshell` component.
     *
     * @param callback - The callback to try-catch.
     */
    makeCallbackSafe<T extends Function>(callback: T): T;
    /**
     * Safely post a warn message to the console. The message will be routed to
     * shell and printed in the React Native console during development.
     */
    warn(message: string): void;
    /**
     * Safely post an info message to the console. The message will be routed to
     * shell and printed in the React Native console during development.
     */
    info(message: string): void;
    /**
     * A collection of utilities to manipulate the DOM.
     */
    utils: DOMUtils;
}

/**
 * A shell component type derived from its features.
 *
 * @typeparam C - A type of the `WebView` component.
 * @typeparam F - A type for a collection of features to inject.
 *
 * @public
 */
export declare type WebshellComponent<C extends ComponentType<any>, F extends Feature<any, any, any>[]> = ForwardRefExoticComponent<WebshellProps<ComponentPropsWithoutRef<C>, F> & RefAttributes<ElementRef<C>>>;

/**
 * Props all shell components will support.
 *
 * @public
 */
export declare interface WebshellInvariantProps {
    /**
     * Triggered when a feature script throws.
     */
    onWebFeatureError?: (featureIdentifier: string, error: string) => void;
    /**
     * Report Web error messages from features in the console.
     *
     * @defaultvalue `__DEV__` (`true` in development, `false` otherwise)
     */
    webshellDebug?: boolean;
    /**
     * If this prop is `true` and `webshellDebug` is `true`, errors will be
     * thrown when inconsistencies are identified.
     *
     * @defaultvalue false
     */
    webshellStrictMode?: boolean;
    /**
     * Pass a reference to send messages to the Web environment.
     */
    webHandleRef?: Ref<WebHandle>;
}

/**
 * Props of the Webshell produced by {@link makeWebshell}.
 *
 * @typeparam W - The type for the Props of the `WebView` component.
 * @typeparam F - The type for a collection of features classes.
 *
 * @public
 */
export declare type WebshellProps<W extends MinimalWebViewProps, F extends Feature<any, any, any>[]> = WebshellInvariantProps & W & (F[number] extends never ? {} : ExtractPropsFromFeature<F[number]>);

export { }
