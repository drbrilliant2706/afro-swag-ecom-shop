import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Image, 
  Video, 
  Calendar,
  Eye,
  Edit,
  Trash2,
  Plus,
  Upload,
  Globe,
  Users,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const pages = [
  {
    id: 'PAGE-001',
    title: 'Homepage',
    slug: '/',
    type: 'page',
    status: 'published',
    author: 'Admin',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    views: 1234
  },
  {
    id: 'PAGE-002',
    title: 'About Us',
    slug: '/about',
    type: 'page',
    status: 'published',
    author: 'Admin',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-20',
    views: 876
  },
  {
    id: 'PAGE-003',
    title: 'Contact Us',
    slug: '/contact',
    type: 'page',
    status: 'draft',
    author: 'Admin',
    createdAt: '2024-01-05',
    updatedAt: null,
    views: 0
  }
];

const media = [
  {
    id: 'MEDIA-001',
    name: 'logo.png',
    type: 'image',
    size: '256KB',
    uploadedAt: '2024-01-01',
    url: '/images/logo.png'
  },
  {
    id: 'MEDIA-002',
    name: 'banner.jpg',
    type: 'image',
    size: '1.2MB',
    uploadedAt: '2024-01-10',
    url: '/images/banner.jpg'
  },
  {
    id: 'MEDIA-003',
    name: 'promo_video.mp4',
    type: 'video',
    size: '15MB',
    uploadedAt: '2024-01-15',
    url: '/videos/promo_video.mp4'
  }
];

const blogPosts = [
  {
    id: 'POST-001',
    title: 'Top 10 African Fashion Trends in 2024',
    slug: '/blog/top-10-african-fashion-trends-in-2024',
    status: 'published',
    author: 'Admin',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-25',
    views: 2345,
    comments: 123
  },
  {
    id: 'POST-002',
    title: 'The Rise of Sustainable Fashion in Africa',
    slug: '/blog/the-rise-of-sustainable-fashion-in-africa',
    status: 'published',
    author: 'Admin',
    createdAt: '2024-01-10',
    updatedAt: '2024-02-01',
    views: 1876,
    comments: 78
  },
  {
    id: 'POST-003',
    title: '5 Must-Have Accessories for the Modern African Woman',
    slug: '/blog/5-must-have-accessories-for-the-modern-african-woman',
    status: 'draft',
    author: 'Admin',
    createdAt: '2024-02-01',
    updatedAt: null,
    views: 0,
    comments: 0
  }
];

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('pages');

  const publishedPages = pages.filter(page => page.status === 'published').length;
  const totalMedia = media.length;
  const totalBlogPosts = blogPosts.length;
  const totalViews = pages.reduce((sum, page) => sum + page.views, 0) + blogPosts.reduce((sum, post) => sum + post.views, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">
            Manage website content, media, and blog posts
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{publishedPages}</div>
                <p className="text-sm text-muted-foreground">Published Pages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Image className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalMedia}</div>
                <p className="text-sm text-muted-foreground">Total Media Files</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <MessageSquare className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalBlogPosts}</div>
                <p className="text-sm text-muted-foreground">Blog Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalViews}</div>
                <p className="text-sm text-muted-foreground">Total Content Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{page.title}</p>
                        <p className="text-sm text-muted-foreground">{page.slug}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(page.status)} variant="secondary">
                        {page.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Media Library</CardTitle>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Media
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {media.map((item) => (
                  <div key={item.id} className="relative">
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.name} className="rounded-md aspect-square object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted rounded-md aspect-square">
                        <Video className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full bg-background/80 p-2 rounded-b-md">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Blog Posts</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Post
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          <span>{post.slug}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(post.status)} variant="secondary">
                        {post.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
