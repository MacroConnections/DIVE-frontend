import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectComposeVisualization } from '../../actions/ComposeActions';

import styles from './Compose.sass';

import Visualization from '../Visualizations/Visualization';

export default class ComposeVisualizationPreviewBlock extends Component {
  handleClick() {
    const { spec, onClick } = this.props;
    onClick(spec.id, spec.meta.desc);
  }

  render() {
    const { spec, fieldNameToColor } = this.props;

    return (
      <div className={ styles.contentPreviewBlockContainer }
           onClick={ this.handleClick.bind(this) }>
        <Visualization
          headerClassName={ styles.visualizationPreviewBlockHeader }
          fieldNameToColor={ fieldNameToColor }
          visualizationTypes={ spec.vizTypes }
          spec={ spec }
          data={ spec.data }
          isMinimalView={ true }
          showHeader={ true } />
      </div>
    );
  }
}

ComposeVisualizationPreviewBlock.propTypes = {
  spec: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  fieldNameToColor: PropTypes.object,
};
