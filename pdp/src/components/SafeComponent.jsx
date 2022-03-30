import React from "react";

// Error boundaries is the only case where you HAVE to use class components. (componentDidCatch)
export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStoreFromError(error) {
    return { hasError: true };
  }
  componentDidCatch() {}
}
