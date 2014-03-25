from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'photoup.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    
    url(r'^$', 'photoupweb.views.index'),
    url(r'^upload/$', 'photoupweb.views.upload'),
    url(r'^admin/', include(admin.site.urls)),
)
