import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GlobalFeed from 'pages/globalFeed';
import YourFeed from 'pages/yourFeed';
import TagFeed from 'pages/tagFeed';
import Article from 'pages/article';
import Authentication from 'pages/authentication';
import CreateArticle from 'pages/createArticle'
import EditArticle from 'pages/editArticle'
import Settings from 'pages/settings'
import UserProfile from 'pages/userProfile'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={GlobalFeed} exact />
            <Route path="/profiles/:slug" component={UserProfile} />
            <Route path="/profiles/:slug/favorites" component={UserProfile} />
            <Route path="/settings" component={Settings} exact />
            <Route path="/articles/new" component={CreateArticle} exact />
            <Route path="/articles/:slug/edit" component={EditArticle} exact />
            <Route path="/feed" component={YourFeed} exact />
            <Route path="/tags/:slug" component={TagFeed} />
            <Route path="/tags/:slug" component={TagFeed} />
            <Route path="/articles/:slug" component={Article} exact />
            <Route path="/login" component={Authentication} />
            <Route path="/register" component={Authentication} />
        </Switch>
    )
}

export default Routes