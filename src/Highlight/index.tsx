import { HighlightBase, HighlightProps } from './defalut';
import FullFeatureWrapper from './wrapper';

const Highlight = (props: HighlightProps) => {
  if (props?.containerWrapper) {
    return <FullFeatureWrapper {...props} />;
  }
  return <HighlightBase {...props} />;
};

export { Highlight };
