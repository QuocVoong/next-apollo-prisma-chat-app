import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useCombobox } from "downshift";
import { Box, Button, Flex, Input, Spinner } from '@chakra-ui/react';
import { map, debounce, concat } from "lodash";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const RenderItem = memo(({ text, query }) => {
  const parts = useMemo(() => {
    const matches = match(text.text, query);
    return parse(text.text, matches);
  }, [text.text, query]);

  return map(parts, (part, idx) => {
    return (
      <span
        key={idx}
        style={{ color: part.highlight && 'yellow'}}
      >{part.text}
      </span>
    );
  });
});

function SearchBox(props) {
  const { loading, data, itemToString, onFetch, onFetchMore, selectedItemChange, placeholder, hasLoadMore, components = {} } = props;
  const onFetchDebounce = useCallback(debounce(onFetch, 200), [onFetch]);

  const RenderItemComponent = components.renderItem;

  const {
    inputValue,
    getInputProps,
    highlightedIndex,
    isOpen,
    getComboboxProps,
    getMenuProps,
    getItemProps,
    closeMenu,
    ...rest
  } = useCombobox({
    items: data || [],
    itemToString: itemToString ? itemToString : (item) => item.name,
    onInputValueChange: ({ inputValue }) => {
      onFetchDebounce(inputValue);
    },
    onSelectedItemChange: ({ selectedItem }) => {
      selectedItemChange(selectedItem)
    }
  });

  return (
    <Box>
      <div>
        <Input
          {...getInputProps({
            type: 'search',
            placeholder,
            id: 'search',
            className: loading ? 'loading' : null,
          })}
        />
      </div>
      <OverlayScrollbarsComponent>
        <Box style={{ maxHeight: '250px' }}>
          <div {...getMenuProps()}>
            {data?.map((item, index) => (
              <div
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#bde4ff' }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}>
                {RenderItemComponent
                  ? <RenderItemComponent item={item} query={inputValue} />
                  : <RenderItem text={item.text} query={inputValue}/>}
              </div>
            ))}
          </div>
        </Box>
      </OverlayScrollbarsComponent>
      {isOpen && !data.length && inputValue.length > 0 && (
        <Flex w="100%" color="gray.300" justify="center">No items found</Flex>
      )}
      {hasLoadMore && <Flex justify="flex-end">
        <Button variant='link' onClick={onFetchMore}>More
        </Button>
      </Flex>}
    </Box>
  );
}

export default SearchBox;