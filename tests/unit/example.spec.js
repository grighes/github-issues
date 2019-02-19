import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import AppContent from '@/components/AppContent.vue';
import SearchResults from '@/components/SearchResults.vue';
import RepoList from '@/components/RepoList.vue';
import IssueList from '@/components/IssueList.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

describe('App.vue', () => {
  it('check if btns exists', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.contains('#nav .btn')).toBe(true);
  });
});

describe('AppContent.vue', () => {
  it('check if main input exists', () => {
    const wrapper = shallowMount(AppContent);
    expect(wrapper.contains('form input.repo')).toBe(true);
  });
  it('renders search results component', () => {
    const wrapper = mount(AppContent, {
      stubs: {
        SearchResults: true
      }
    });
    expect(wrapper.find(SearchResults).exists()).toBe(true);
  });
});

describe('SearchResults', () => {
  it('renders repo list component', () => {
    const wrapper = shallowMount(SearchResults);
    expect(wrapper.find(RepoList).exists()).toBe(true);
  });
});

describe('IssueList', () => {
  it('renders issue list component', () => {
    const wrapper = shallowMount(IssueList);
    expect(wrapper.find('.issue-list').exists()).toBe(true);
  });
});
