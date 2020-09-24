import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @param {Object|null|undefined} props arg format: 
 *        {
 *             <store name>: [<prop name>, <prop name>, ... , <prop name>],
 *                 .
 *                 .
 *                 .
 *             <store name>: [<prop name>, <prop name>, ... , <prop name>],
 *        }
 * @param {Object|null|undefined} actions arg format:
 *        {
 *             <store name>: [<action function name>, ... , <action function name>],
 *                 .
 *                 .
 *                 .
 *             <store name>: [<action function name>, ... , <action function name>],
 *        }
 * NOTE: <prop name> and <action function name> are of type 'String'.
 */
export default function({ props, actions }) {
    const mapStateToProps = (state) => {
        if (props === null || props === undefined) return null;
        var stateConfig = {}
        Object.entries(props).forEach(([store, _props]) => {
            _props.forEach((prop) => {
                stateConfig[prop] = state[store][prop]; 
            });
        });
        return stateConfig;
    };

    const mapDispatchToProps = (dispatch) => {
        if (actions === null || actions === undefined) return null;
        var dispatchConfig = {}
        Object.entries(actions).forEach(([store, _actions]) => {
            _actions.forEach((action) => {
                dispatchConfig[action] = bindActionCreators(
                    require(`./stores/${store}/actions`)[action], 
                    dispatch
                );
            });
        });
        return dispatchConfig;
    };

    return (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
}