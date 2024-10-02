import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'tab-selector',
  styleUrl: 'tab-selector.scss',
  shadow: false,
})
export class TabSelector {
  @Prop() tabs: { name: string; label: string | any; content: () => any }[];
  @State() activeTab: string;

  handleTabClick(tabName: string) {
    this.activeTab = tabName;
  }

  componentWillLoad() {
    if (this.tabs?.length > 0) this.activeTab = this.tabs[0].name;
  }

  render() {
    return (
      <div class="tab-selector">
        <div class="tab-selector-tabs">
          {this.tabs?.map(tab => (
            <span
              class={{ active: this.activeTab === tab.name }}
              onClick={() => this.handleTabClick(tab.name)}
            >
              {tab.label}
            </span>
          ))}
        </div>
        <div class="tab-selector-tabs-content">
          {this.tabs?.map(tab => (
            <div
              class={{
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
              }}
            >
              {this.activeTab === tab.name && tab.content()}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
