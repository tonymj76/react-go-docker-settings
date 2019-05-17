import m from "mithril";
import Icon from "merchant/src/components/icon";

export var Loader = {
  oninit() {},
  state: { loading: true, initialized: false },
  view({ attrs: { loading, initialized } }) {
    return (
      <div class="db my-3 text-center">
        {loading && <Icon type="loader" color="#000000" />}
        {!(loading || initialized) && (
          <p>An error occurred, please try loading again</p>
        )}
      </div>
    );
  }
};
