
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Image, 
  Search, 
  Globe,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Settings,
  BarChart3
} from 'lucide-react';

const pages = [
  {
    id: 'PAGE-001',
    title: 'About Us',
    slug: '/about',
    status: 'published',
    lastModified: '2024-01-15',
    author: 'Admin',
    views: 1234,
    seoScore: 85
  },
  {
    id: 'PAGE-002',
    title: 'Size Guide',
    slug: '/size-guide',
    status: 'published',
    lastModified: '2024-01-10',
    author: 'Admin',
    views: 892,
    seoScore: 92
  },
  {
    id: 'PAGE-003',
    title: 'Shipping Information',
    slug: '/shipping-info',
    status: 'draft',
    lastModified: '2024-01-20',
    author: 'Admin',
    views: 0,
    seoScore: 67
  }
];

const blogPosts = [
  {
    id: 'BLOG-001',
    title: 'The Story Behind African Fashion',
    slug: '/blog/african-fashion-story',
    status: 'published',
    publishDate: '2024-01-15',
    author: 'Sarah Njeri',
    views: 2341,
    comments: 23,
    category: 'Culture'
  },
  {
    id: 'BLOG-002',
    title: 'Sustainable Fashion in Africa',
    slug: '/blog/sustainable-fashion',
    status: 'published',
    publishDate: '2024-01-12',
    author: 'John Mwangi',
    views: 1876,
    comments: 15,
    category: 'Sustainability'
  },
  {
    id: 'BLOG-003',
    title: 'Traditional Patterns in Modern Design',
    slug: '/blog/traditional-patterns',
    status: 'draft',
    publishDate: null,
    author: 'Grace Wanjiku',
    views: 0,
    comments: 0,
    category: 'Design'
  }
];

const mediaLibrary = [
  {
    id: 'IMG-001',
    name: 'hero-banner-1.jpg',
    type: 'image',
    size: '2.4 MB',
    dimensions: '1920x1080',
    uploadDate: '2024-01-15',
    usedIn: 3
  },
  {
    id: 'IMG-002',
    name: 'product-lifestyle-1.jpg',
    type: 'image',
    size: '1.8 MB',
    dimensions: '1200x800',
    uploadDate: '2024-01-14',
    usedIn: 1
  },
  {
    id: 'IMG-003',
    name: 'brand-story-video.mp4',
    type: 'video',
    size: '45.2 MB',
    dimensions: '1920x1080',
    uploadDate: '2024-01-10',
    usedIn: 1
  }
];

export const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('pages');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getSeoScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">
            Manage your website content, SEO, and media assets
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Content Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Total Pages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Globe className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">15.2K</div>
                <p className="text-sm text-muted-foreground">Total Page Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">82</div>
                <p className="text-sm text-muted-foreground">Avg SEO Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="media">Media Library</TabsTrigger>
          <TabsTrigger value="seo">SEO Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Page
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pages List */}
          <div className="space-y-4">
            {pages.map((page) => (
              <Card key={page.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium">{page.title}</h3>
                        <Badge className={getStatusColor(page.status)} variant="secondary">
                          {page.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{page.slug}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Modified: {page.lastModified}</span>
                        <span>By: {page.author}</span>
                        <span>Views: {page.views}</span>
                        <span className={`font-medium ${getSeoScoreColor(page.seoScore)}`}>
                          SEO: {page.seoScore}/100
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blog" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Blog Posts</CardTitle>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium">{post.title}</h4>
                        <Badge className={getStatusColor(post.status)} variant="secondary">
                          {post.status}
                        </Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By: {post.author}</span>
                        {post.publishDate && <span>Published: {post.publishDate}</span>}
                        <span>Views: {post.views}</span>
                        <span>Comments: {post.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
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
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Media Library</CardTitle>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Media
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {mediaLibrary.map((media) => (
                  <Card key={media.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                        {media.type === 'image' ? (
                          <Image className="h-8 w-8 text-muted-foreground" />
                        ) : (
                          <FileText className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      <h4 className="font-medium text-sm truncate">{media.name}</h4>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>{media.size} • {media.dimensions}</p>
                        <p>Uploaded: {media.uploadDate}</p>
                        <p>Used in {media.usedIn} places</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  General SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Site Title</label>
                  <Input placeholder="AFRIKA'S FINEST - Premium African Fashion" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Meta Description</label>
                  <Input placeholder="Discover authentic African fashion..." className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Keywords</label>
                  <Input placeholder="african fashion, traditional clothing..." className="mt-1" />
                </div>
                <Button>Save SEO Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">Organic Traffic</p>
                    <p className="text-sm text-green-600 dark:text-green-400">This month</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">+23%</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-800 dark:text-blue-200">Search Ranking</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Average position</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">12.5</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                  <div>
                    <p className="font-medium text-purple-800 dark:text-purple-200">Page Speed</p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Core Web Vitals</p>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">Good</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
