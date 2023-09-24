import React, { useEffect, useState } from "react";
import Page from "./Page";
import PageIndicator from "./PageIndicator";
let pages=0
let scrollLocker

export default function PageScroller (props) {
    const [scrollPos, setScrollPos]= useState(0)
    const [pageIndex, setPageIndex]= useState(0)
    const [scrollAgain, setScrollAgain]= useState(true)

    useEffect(()=>{
        const handleScroll = () => {
            const winHeight = window.innerHeight;
            
            if(scrollAgain) {
              if((document.body.getBoundingClientRect()).top > scrollPos) {
                // handle scroll up
                if(pageIndex - 1 >= 0) {
                  //pageIndex--;
                  scroll(winHeight, pageIndex - 1);
                }
              } else {
                // handle scroll down
                if(pageIndex + 1 <= pages - 1) {
                  //pageIndex++;
                  scroll(winHeight, pageIndex + 1);
                }
              }
            } else {
              // scroll to current position if scrolling is disabled
              window.scrollTo(0, pageIndex * winHeight);
            }
          }
          window.addEventListener('scroll', handleScroll);

          return ()=>window.removeEventListener('scroll', handleScroll);

    }, [pageIndex, scrollAgain, scrollPos])

    
    const scroll = (winHeight, pageIndex) => {
      window.scrollTo(0, winHeight * pageIndex);
  
      scrollLocker = setTimeout(() => {
        setScrollAgain(true)
      }, 1000);

      setScrollPos((document.body.getBoundingClientRect()).top)
      setPageIndex(pageIndex)
      setScrollAgain(false)
    }
    
    const goToPage = (index) => {
      scroll(window.innerHeight, index);
    }
    
    const renderChildren = () => {
      let childElements = [];
      let pageIndicator = undefined;
      let pageNav = undefined;
      let navButtons = [];
      let pageCount = 0;
      
      React.Children.map(props.children, (child, i) => {
        if(child.type === Page) {
           
          if(child.props.navTitle) {
            navButtons.push({
              title: child.props.navTitle,
              index: pageCount
            });
          }
          
          pageCount++;
          childElements.push(child);
        } else if(child.type === PageIndicator) {
          pageIndicator = child;
        }
      });
      
      pages = pageCount;
      
      if(pageIndicator) {
        childElements.push(
          React.cloneElement(pageIndicator, {
            pageCount: pages,
            activePage: pageIndex,
            goToPage: goToPage
          }));
      }
      
      if(pageNav) {
        childElements.push(
          React.cloneElement(pageNav, {
            goToPage: goToPage,
            navButtons: navButtons
          }));
      }
      
      return childElements;
    }
    
      return(
        <div {...props}>
          {renderChildren()}
        </div>
      );
  }