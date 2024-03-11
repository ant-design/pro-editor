import { act, fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { useState } from 'react';
import { SortableList } from '../index';

const Demo = () => {
  const [list, setList] = useState(['hello', 'world']);

  return (
    <>
      <SortableList
        value={list}
        onChange={(value) => {
          console.log('change value', value);
          setList(value);
        }}
        SHOW_STORE_IN_DEVTOOLS
      />
      <Button
        type="primary"
        onClick={() => {
          setList(['foo', 'bar', 'yes']);
        }}
        style={{ marginTop: 8 }}
      >
        Set Data
      </Button>
    </>
  );
};

describe('SortableList', () => {
  it('toggleSetData', () => {
    const { getByText } = render(<Demo />);
    const setDataButton = getByText('Set Data');
    act(() => {
      fireEvent.click(setDataButton);
    });
    expect(getByText('foo')).toBeInTheDocument();
    expect(getByText('bar')).toBeInTheDocument();
    expect(getByText('yes')).toBeInTheDocument();
  });
});
