import ImageGallery from "components/ImageGallery";
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import Button from "components/Button";
import { Component } from "react";
import fetchImages from "Services/api";
import toast, { Toaster } from 'react-hot-toast';




export class App extends Component {
  state = {
    query: '', 
    page: 1, 
    images: [], 
    isLoading: false,
  }

  async componentDidUpdate(_, prevState) {
     const { query, page } = this.state;
    try {
      if (prevState.query !== query || prevState.page !== page) {
     const res = await fetchImages(query, page);
     const items = res.hits;
        
        this.setState({ loading: true })
        this.setState(({ images }) => ({
          images: [...images, ...items],
          isLoading: false,
      }));
      }
    } catch {
      toast.error('Oops, something went wrong! Please reload the page.');
    }
  }
  

  handleSubmit = async e => {
    e.preventDefault(); 
    const input = e.target.elements.search.value.trim();

      if (input === '') {
      toast.error("You didn't enter anything!");
      return;
      }
    const { page, query } = this.state;
    this.setState({ loading: true })
    const res = await fetchImages(input, page);
    this.setState({ loading: false })
    
      if (res.hits.length === 0) {
      toast.error("We couldn't find anything on your request");
      return;
    }; 

    if (input !== query) {
     this.setState({
      images: [],
      query: input,
      page: 1,
      isLoading: true,
      });
    };
  
  };



  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };


  render() {
    const { images, isLoading } = this.state; 


    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} /> 
        {images.length !== 0 && (
          <ImageGallery images={images} /> 
        )}
        {images.length > 0 && !isLoading && (
           <Button onClick={this.onLoadMore} />
        )}
         {isLoading && <Loader/>}
        <Toaster />
      </>
    )
  }
}
