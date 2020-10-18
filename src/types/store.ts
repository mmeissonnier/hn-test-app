export type Story = {
  objectID: string;
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text?: string;
  num_comments: number;
};

export type SearchResult = {
  nbPages: number;
  page: number;
  hitsPerPage: number;
  data: Story[];
};

export type RequestStatus = 'pending' | 'success' | 'error';

export type AppState = {
  status: RequestStatus;
  searchResult: SearchResult;
  storyUpvoteCountMap: Record<string, number>;
  storyHiddenStatusMap: string[];
};
