export class StyleButtonState {
    /// Color hex value
    color: string;
    /// Color hex value for the text
    textColor: string;

    init(object: any) {
        this.color = object.color
        this.textColor = object.textColor
    }
}

export class StyleButton {
    /// Example: 9999px, 0, or any pixel string
    borderRadius: string;
    /// Options: 0 = left, 1 = center, 2 = right
    alignment: number;

    // DEPRECATABLE, in favor of `borderRadius`
    // Options: square, rounded
    // type: string;

    /// Options: none, filled, border
    fillType: string;
    /// State information for normal state
    normalState: StyleButtonState;
    /// State information for hover state
    hoverState: StyleButtonState;

    init(object: any) {
        this.borderRadius = object.borderRadius
        // this.type = object.type
        this.fillType = object.fillType
        this.normalState = new StyleButtonState()
        this.normalState.init(object.normalState)
        this.hoverState = new StyleButtonState()
        this.hoverState.init(object.hoverState)
    }
}

export class StyleFont {
    /// Supports fonts imported in the website
    font: string;
    /// Options: 100, 200, 300, 400, 500, 600, 700, 800, 900
    weight: number;
    /// Options: any number value, size is in pixels
    size: number;
    /// Options: any number value, size is in pixels
    lineHeight: number;
    /// Supports hex strings representing colors
    color: string;
    /// Supports fractional number (e.g. - 0.1) on the spacing between letters in EM values
    letterSpacing: number

    init(object: any) {
        this.font = object.font
        this.weight = object.weight
        this.size = object.size
        this.lineHeight = object.lineHeight
        this.color = object.color
        this.letterSpacing = object.letterSpacing
    }
}

export class StylePadding {
    /// Padding amount at the top of the container
    top: number = 0
    /// Padding amount at the bottom of the container
    bottom: number = 0
    /// Padding amount at the left of the container
    left: number = 0
    /// Padding amount at the right of the container
    right: number = 0

    init(top: number, right: number, bottom: number, left: number) {
        this.top = top
        this.right = right
        this.bottom = bottom
        this.left = left
    }
}
