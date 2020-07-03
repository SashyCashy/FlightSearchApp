/**
 * File Description: This is a typeahead component, enables the user to type in the text in input and it shows the dropdown list according to what the user is typing
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React, { useCallback } from 'react';
import {
  Typeahead,
  Highlighter,
  Menu,
  MenuItem,
} from 'react-bootstrap-typeahead';
import List from 'react-tiny-virtual-list';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const TypeAheadComponent = ({ placeholder, data = [], id, onChange }) => {
  const renderMenu = useCallback((results, menuProps, props) => {
    const itemHeight = 32;
    return (
      <Menu {...menuProps}>
        <List
          scrollToIndex={props.activeIndex || 0}
          scrollToAlignment="auto"
          height={results.length < 5 ? results.length * itemHeight : 300}
          itemCount={results.length}
          itemSize={itemHeight}
          renderItem={({ index, style }) => {
            const item = results[index];
            return (
              <MenuItem key={item} option={item} position={index} style={style}>
                <Highlighter search={props.text}>{item}</Highlighter>
              </MenuItem>
            );
          }}
        />
      </Menu>
    );
  });
  return (
    <Typeahead
      id={id}
      options={data}
      onChange={(selected) => onChange(selected[0])}
      paginate={false}
      placeholder={placeholder}
      renderMenu={renderMenu}
    />
  );
};

export default React.memo(TypeAheadComponent);
