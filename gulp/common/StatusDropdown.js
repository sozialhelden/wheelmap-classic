const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');

const I18n = require('./I18n');
const Dropdown = require('./Dropdown');

const { func, oneOf } = React.PropTypes;

const WHEELCHAIR = 'wheelchair';
const TOILET = 'toilet';
const ACCESSIBILITIES = {
  yes: 'fully_accessible',
  limited: 'limited_accessible',
  no: 'not_accessible',
  unknown: 'unknown_accessible'
};

class StatusDropdown extends React.Component {
  static propTypes = {
    type: oneOf([WHEELCHAIR, TOILET]).isRequired,
    status: oneOf(['unknown', 'yes', 'limited', 'no']).isRequired,
    onChange: func.isRequired
  };

  static defaultProps = {
    status: 'unknown'
  };

  shouldComponentUpdate(nextProps) {
    return this.props.status !== nextProps.status;
  }

  componentDidMount() {
    const { type } = this.props;

    const scopeNamespace = `${type}status`,
      popoverScopeNamespace = type === WHEELCHAIR ? 'wheelmap.what_is' : `${scopeNamespace}.what_is`;

    const $questionMarks = $(ReactDOM.findDOMNode(this))
      .find('[data-toggle="popover"]');

    $questionMarks.popover({
      trigger: 'hover',
      title: function() {
        const status = $(this).attr('data-status');

        return I18n.t(`${scopeNamespace}.${status}`);
      },
      content: function() {
        const status = $(this).attr('data-status');

        return I18n.t(`${popoverScopeNamespace}.${type === WHEELCHAIR ? ACCESSIBILITIES[status] : status}`);
      }
    });
  }

  changeStatus(itemStatus) {
    this.props.onChange(itemStatus);
  }

  render() {
    const { type, status, ...props } = this.props;

    const scopeNamespace = `${type}status`,
      items = type === WHEELCHAIR ? ['yes', 'limited', 'no'] : ['yes', 'no'];

    const dropdownItems = items.map(itemStatus => {
      const className = classNames('wm-checkbox', 'wheelchair', itemStatus, { checked: itemStatus === status }),
        scope = `${scopeNamespace}.${itemStatus}`;

      return (
        <Dropdown.Item key={itemStatus}>
          <a onClick={this.changeStatus.bind(this, itemStatus)} className={itemStatus}>
            <span className={className}><i className="icon-ok"/></span>
            <I18n scope={scope}/>
            <i className="icon-question-sign" data-status={itemStatus} data-toggle="popover"/>
          </a>
        </Dropdown.Item>
      );
    });

    const className = `wheelchair ${status}`,
      scope = `${scopeNamespace}.${status}`;

    return (
      <div className="node-status-dropdown" {...props}>
        <Dropdown>
          <Dropdown.Button className={className} ref="button">
            <I18n scope={scope}/>
            <i className="icon-question-sign"
               data-status={status}
               data-toggle="popover"/>
            <i className="pull-right icon-caret-down"/>
          </Dropdown.Button>
          <Dropdown.Menu>
            {dropdownItems}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}



module.exports = StatusDropdown;