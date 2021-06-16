export class StyleButtonState {
    /// Color hex value
    color: string;
    /// Color hex value for the text
    text_color: string;

    init(object: any) {
        this.color = object.color;
        this.text_color = object.text_color;
    }
}

export class StyleButton {
    /// Example: 9999px, 0, or any pixel string
    border_radius: string;
    /// Options: 0 = left, 1 = center, 2 = right
    alignment: number;
    /// Options: none, filled, border
    fill_type: string;
    /// State information for normal state
    normal_state: StyleButtonState;
    /// State information for hover state
    hover_state: StyleButtonState;

    init(object: any) {
        this.border_radius = object.border_radius;
        // this.type = object.type
        this.fill_type = object.fill_type;
        this.normal_state = new StyleButtonState();
        this.normal_state.init(object.normal_state);
        this.hover_state = new StyleButtonState();
        this.hover_state.init(object.hover_state);
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
    line_height: number;
    /// Supports hex strings representing colors
    color: string;
    /// Supports fractional number (e.g. - 0.1) on the spacing between letters in EM values
    letter_spacing: number;

    init(object: any) {
        this.font = object.font;
        this.weight = object.weight;
        this.size = object.size;
        this.line_height = object.line_height;
        this.color = object.color;
        this.letter_spacing = object.letter_spacing;
    }
}

export class StylePadding {
    /// Padding amount at the top of the container
    top: number = 0;
    /// Padding amount at the bottom of the container
    bottom: number = 0;
    /// Padding amount at the left of the container
    left: number = 0;
    /// Padding amount at the right of the container
    right: number = 0;

    init(top: number, right: number, bottom: number, left: number) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}
export class StyleMargin {
    /// Padding amount at the top of the container
    top: number = 0;
    /// Padding amount at the bottom of the container
    bottom: number = 0;
    /// Padding amount at the left of the container
    left: number = 0;
    /// Padding amount at the right of the container
    right: number = 0;

    init(top: number, right: number, bottom: number, left: number) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}
