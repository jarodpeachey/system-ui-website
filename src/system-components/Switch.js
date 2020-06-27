Object.defineProperty(exports, '__esModule', { value: true });

const React = require('react');
const PropTypes = require('prop-types');

function _extends () {
  _extends =
    Object.assign ||
    function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const uncheckedIcon = React.createElement(
  'svg',
  {
    viewBox: '-2 -5 14 20',
    height: '100%',
    width: '100%',
    style: {
      position: 'absolute',
      top: 0,
    },
  },
  React.createElement('path', {
    d:
      'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12',
    fill: '#fff',
    fillRule: 'evenodd',
  }),
);
const checkedIcon = React.createElement(
  'svg',
  {
    height: '100%',
    width: '100%',
    viewBox: '-2 -5 17 21',
    style: {
      position: 'absolute',
      top: 0,
    },
  },
  React.createElement('path', {
    d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0',
    fill: '#fff',
    fillRule: 'evenodd',
  }),
);

function createBackgroundColor (
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor,
) {
  const relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  let newColor = '#';

  for (let i = 1; i < 6; i += 2) {
    const offComponent = parseInt(offColor.substr(i, 2), 16);
    const onComponent = parseInt(onColor.substr(i, 2), 16);
    const weightedValue = Math.round(
      (1 - relativePos) * offComponent + relativePos * onComponent,
    );
    let newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = `0${newComponent}`;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor (color) {
  if (color.length === 7) {
    return color;
  }

  let sixDigitColor = '#';

  for (let i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor (pos, checkedPos, uncheckedPos, offColor, onColor) {
  const sixDigitOffColor = convertShorthandColor(offColor);
  const sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(
    pos,
    checkedPos,
    uncheckedPos,
    offColor,
    onColor,
  );
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
const hexColorPropType = function (props, propName, componentName) {
  const prop = props[propName];

  if (
    typeof prop !== 'string' ||
    prop[0] !== '#' ||
    (prop.length !== 4 && prop.length !== 7)
  ) {
    return new Error(
      `Invalid prop '${ 
        propName 
        }' supplied to '${ 
        componentName 
        }'. '${ 
        propName 
        }' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'`,
    );
  }

  return null;
};

function objectWithoutProperties (obj, exclude) {
  const target = {};

  for (const k in obj)
    if (
      Object.prototype.hasOwnProperty.call(obj, k) &&
      exclude.indexOf(k) === -1
    )
      target[k] = obj[k];

  return target;
}

const Switch =
  /* @__PURE__ */
  (function (Component) {
    function Switch (props) {
      Component.call(this, props);
      const {height} = props;
      const {width} = props;
      const {handleDiameter} = props;
      const {checked} = props;
      this.$handleDiameter = handleDiameter || height - 2;
      this.$checkedPos = Math.max(
        width - height,
        width - (height + this.$handleDiameter) / 2,
      );
      this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
      this.state = {
        $pos: checked ? this.$checkedPos : this.$uncheckedPos,
      };
      this.$lastDragAt = 0;
      this.$lastKeyUpAt = 0;
      this.$onMouseDown = this.$onMouseDown.bind(this);
      this.$onMouseMove = this.$onMouseMove.bind(this);
      this.$onMouseUp = this.$onMouseUp.bind(this);
      this.$onTouchStart = this.$onTouchStart.bind(this);
      this.$onTouchMove = this.$onTouchMove.bind(this);
      this.$onTouchEnd = this.$onTouchEnd.bind(this);
      this.$onClick = this.$onClick.bind(this);
      this.$onInputChange = this.$onInputChange.bind(this);
      this.$onKeyUp = this.$onKeyUp.bind(this);
      this.$setHasOutline = this.$setHasOutline.bind(this);
      this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
      this.$getInputRef = this.$getInputRef.bind(this);
    }

    if (Component) Switch.__proto__ = Component;
    Switch.prototype = Object.create(Component && Component.prototype);
    Switch.prototype.constructor = Switch;

    Switch.prototype.componentDidUpdate = function componentDidUpdate (
      prevProps,
    ) {
      if (prevProps.checked === this.props.checked) {
        return;
      }

      const $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
      this.setState({
        $pos,
      });
    };

    Switch.prototype.$onDragStart = function $onDragStart (clientX) {
      this.$inputRef.focus();
      this.setState({
        $startX: clientX,
        $hasOutline: true,
        $dragStartingTime: Date.now(),
      });
    };

    Switch.prototype.$onDrag = function $onDrag (clientX) {
      const ref = this.state;
      const {$startX} = ref;
      const {$isDragging} = ref;
      const {$pos} = ref;
      const ref$1 = this.props;
      const {checked} = ref$1;
      const startPos = checked ? this.$checkedPos : this.$uncheckedPos;
      const mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

      if (!$isDragging && clientX !== $startX) {
        this.setState({
          $isDragging: true,
        });
      }

      const newPos = Math.min(
        this.$checkedPos,
        Math.max(this.$uncheckedPos, mousePos),
      ); // Prevent unnecessary rerenders

      if (newPos !== $pos) {
        this.setState({
          $pos: newPos,
        });
      }
    };

    Switch.prototype.$onDragStop = function $onDragStop (event) {
      const ref = this.state;
      const {$pos} = ref;
      const {$isDragging} = ref;
      const {$dragStartingTime} = ref;
      const ref$1 = this.props;
      const {checked} = ref$1;
      const halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

      const timeSinceStart = Date.now() - $dragStartingTime;

      if (!$isDragging || timeSinceStart < 250) {
        this.$onChange(event); // Handle dragging from checked position
      } else if (checked) {
        if ($pos > halfwayCheckpoint) {
          this.setState({
            $pos: this.$checkedPos,
          });
        } else {
          this.$onChange(event);
        } // Handle dragging from unchecked position
      } else if ($pos < halfwayCheckpoint) {
        this.setState({
          $pos: this.$uncheckedPos,
        });
      } else {
        this.$onChange(event);
      }

      this.setState({
        $isDragging: false,
        $hasOutline: false,
      });
      this.$lastDragAt = Date.now();
    };

    Switch.prototype.$onMouseDown = function $onMouseDown (event) {
      event.preventDefault(); // Ignore right click and scroll

      if (typeof event.button === 'number' && event.button !== 0) {
        return;
      }

      this.$onDragStart(event.clientX);
      typeof window !== 'undefined' &&
        window.addEventListener('mousemove', this.$onMouseMove);
      typeof window !== 'undefined' &&
        window.addEventListener('mouseup', this.$onMouseUp);
    };

    Switch.prototype.$onMouseMove = function $onMouseMove (event) {
      event.preventDefault();
      this.$onDrag(event.clientX);
    };

    Switch.prototype.$onMouseUp = function $onMouseUp (event) {
      this.$onDragStop(event);
      typeof window !== 'undefined' &&
        window.removeEventListener('mousemove', this.$onMouseMove);
      typeof window !== 'undefined' &&
        window.removeEventListener('mouseup', this.$onMouseUp);
    };

    Switch.prototype.$onTouchStart = function $onTouchStart (event) {
      this.$checkedStateFromDragging = null;
      this.$onDragStart(event.touches[0].clientX);
    };

    Switch.prototype.$onTouchMove = function $onTouchMove (event) {
      this.$onDrag(event.touches[0].clientX);
    };

    Switch.prototype.$onTouchEnd = function $onTouchEnd (event) {
      event.preventDefault();
      this.$onDragStop(event);
    };

    Switch.prototype.$onInputChange = function $onInputChange (event) {
      // This condition is unfortunately needed in some browsers where the input's change event might get triggered
      // right after the dragstop event is triggered (occurs when dropping over a label element)
      if (Date.now() - this.$lastDragAt > 50) {
        this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

        if (Date.now() - this.$lastKeyUpAt > 50) {
          this.setState({
            $hasOutline: false,
          });
        }
      }
    };

    Switch.prototype.$onKeyUp = function $onKeyUp () {
      this.$lastKeyUpAt = Date.now();
    };

    Switch.prototype.$setHasOutline = function $setHasOutline () {
      this.setState({
        $hasOutline: true,
      });
    };

    Switch.prototype.$unsetHasOutline = function $unsetHasOutline () {
      this.setState({
        $hasOutline: false,
      });
    };

    Switch.prototype.$getInputRef = function $getInputRef (el) {
      this.$inputRef = el;
    };

    Switch.prototype.$onClick = function $onClick (event) {
      event.preventDefault();
      this.$inputRef.focus();
      this.$onChange(event);
      this.setState({
        $hasOutline: false,
      });
    };

    Switch.prototype.$onChange = function $onChange (event) {
      const ref = this.props;
      const {checked} = ref;
      const {onChange} = ref;
      const {id} = ref;
      onChange(!checked, event, id);
    };

    Switch.prototype.render = function render () {
      const ref = this.props;
      const {disabled} = ref;
      const {className} = ref;
      const {offColor} = ref;
      const {onColor} = ref;
      const {offHandleColor} = ref;
      const {onHandleColor} = ref;
      const checkedIcon$$1 = ref.checkedIcon;
      const uncheckedIcon$$1 = ref.uncheckedIcon;
      const {boxShadow} = ref;
      const {activeBoxShadow} = ref;
      const {height} = ref;
      const {width} = ref;
      const {handleDiameter} = ref;
      const rest$1 = objectWithoutProperties(ref, [
        'disabled',
        'className',
        'offColor',
        'onColor',
        'offHandleColor',
        'onHandleColor',
        'checkedIcon',
        'uncheckedIcon',
        'boxShadow',
        'activeBoxShadow',
        'height',
        'width',
        'handleDiameter',
      ]);
      const rest = rest$1;
      const ref$1 = this.state;
      const {$pos} = ref$1;
      const {$isDragging} = ref$1;
      const {$hasOutline} = ref$1;
      const rootStyle = {
        position: 'relative',
        display: 'inline-block',
        textAlign: 'left',
        opacity: disabled ? 0.5 : 1,
        direction: 'ltr',
        borderRadius: height / 2,
        WebkitTransition: 'opacity 0.25s',
        MozTransition: 'opacity 0.25s',
        transition: 'opacity 0.25s',
        touchAction: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      };
      const backgroundStyle = {
        height,
        width,
        margin: Math.max(0, (this.$handleDiameter - height) / 2),
        position: 'relative',
        background: getBackgroundColor(
          $pos,
          this.$checkedPos,
          this.$uncheckedPos,
          offColor,
          onColor,
        ),
        borderRadius: height / 2,
        cursor: disabled ? 'default' : 'pointer',
        WebkitTransition: $isDragging ? null : 'background 0.25s',
        MozTransition: $isDragging ? null : 'background 0.25s',
        transition: $isDragging ? null : 'background 0.25s',
      };
      const checkedIconStyle = {
        height,
        width: Math.min(
          height * 1.5,
          width - (this.$handleDiameter + height) / 2 + 1,
        ),
        position: 'relative',
        opacity:
          ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
        pointerEvents: 'none',
        WebkitTransition: $isDragging ? null : 'opacity 0.25s',
        MozTransition: $isDragging ? null : 'opacity 0.25s',
        transition: $isDragging ? null : 'opacity 0.25s',
      };
      const uncheckedIconStyle = {
        height,
        width: Math.min(
          height * 1.5,
          width - (this.$handleDiameter + height) / 2 + 1,
        ),
        position: 'absolute',
        opacity:
          1 -
          ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
        right: 0,
        top: 0,
        pointerEvents: 'none',
        WebkitTransition: $isDragging ? null : 'opacity 0.25s',
        MozTransition: $isDragging ? null : 'opacity 0.25s',
        transition: $isDragging ? null : 'opacity 0.25s',
      };
      const handleStyle = {
        height: this.$handleDiameter,
        width: this.$handleDiameter,
        background: getBackgroundColor(
          $pos,
          this.$checkedPos,
          this.$uncheckedPos,
          offHandleColor,
          onHandleColor,
        ),
        display: 'inline-block',
        cursor: disabled ? 'default' : 'pointer',
        borderRadius: '50%',
        position: 'absolute',
        transform: `translateX(${$pos}px)`,
        top: Math.max(0, (height - this.$handleDiameter) / 2),
        outline: 0,
        boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
        border: 0,
        WebkitTransition: $isDragging ?
          null :
          'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
        MozTransition: $isDragging ?
          null :
          'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
        transition: $isDragging ?
          null :
          'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
      };
      const inputStyle = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: 1,
      };
      return React.createElement(
        'div',
        {
          className,
          style: rootStyle,
        },
        React.createElement(
          'div',
          {
            className: 'react-switch-bg',
            style: backgroundStyle,
            onClick: disabled ? null : this.$onClick,
            onMouseDown (e) {
              return e.preventDefault();
            },
          },
          checkedIcon$$1 &&
            React.createElement(
              'div',
              {
                style: checkedIconStyle,
              },
              checkedIcon$$1,
            ),
          uncheckedIcon$$1 &&
            React.createElement(
              'div',
              {
                style: uncheckedIconStyle,
              },
              uncheckedIcon$$1,
            ),
        ),
        React.createElement('div', {
          className: 'react-switch-handle',
          style: handleStyle,
          onClick (e) {
            return e.preventDefault();
          },
          onMouseDown: disabled ? null : this.$onMouseDown,
          onTouchStart: disabled ? null : this.$onTouchStart,
          onTouchMove: disabled ? null : this.$onTouchMove,
          onTouchEnd: disabled ? null : this.$onTouchEnd,
          onTouchCancel: disabled ? null : this.$unsetHasOutline,
        }),
        React.createElement(
          'input',
          {
            
            type: 'checkbox',
              role: 'switch',
              disabled,
              style: inputStyle,
            ...rest,
            ref: this.$getInputRef,
              onFocus: this.$setHasOutline,
              onBlur: this.$unsetHasOutline,
              onKeyUp: this.$onKeyUp,
              onChange: this.$onInputChange,
          },
        ),
      );
    };

    return Switch;
  })(React.Component);

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
};
Switch.defaultProps = {
  disabled: false,
  offColor: '#888',
  onColor: '#080',
  offHandleColor: '#fff',
  onHandleColor: '#fff',
  uncheckedIcon,
  checkedIcon,
  boxShadow: null,
  activeBoxShadow: '0 0 2px 3px #3bf',
  height: 28,
  width: 56,
};

exports.default = Switch;
