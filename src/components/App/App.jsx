import ImageGallery from "components/ImageGallery";
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import Button from "components/Button";
import { Component } from "react";
import fetchImages from "components/Services/api";
import toast, { Toaster } from 'react-hot-toast';




export class App extends Component {
  state = {
    query: '', 
    page: 1, 
    images: [], 
    isLoading: false,
  }

  async componentDidUpdate(_, prevState) {
    try {
      const { query, page } = this.state;
        const res = await fetchImages(query, page);
        const items = res.hits;
      if (prevState.query !== query || prevState.page !== page) {
        
        this.setState({ loading: true })
        this.setState(({ images }) => ({
          images: [...images, ...items],
          isLoading: false,
      }));
      } else if (!items.length) {
         toast.error("We couldn't find anything!");
      }
    } catch {
      toast.error('Oops, something went wrong! Please reload the page.');
    }
  }
  

  handleSubmit = async e => {
    e.preventDefault(); 
    const input = e.target.elements.search.value.trim();
    
    this.setState({
      images: [],
      query: input, 
      page: 1, 
      isLoading: true,
    });
    e.target.reset();
    
    if (input === '') {
      toast.error("You didn't enter anything!");
      return;
    } 
    e.target.reset();
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
