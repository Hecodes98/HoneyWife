import React from "react";
import Predesign from "../components/Predesign";

import api from "../api";

class ClipArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchClip();
  }

  fetchClip = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.clipArt.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return <Predesign data={this.state.data} />;
  }
}

export default ClipArt;
