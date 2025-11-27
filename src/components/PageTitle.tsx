import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
  description?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

export default PageTitle;