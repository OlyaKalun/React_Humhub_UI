import React from "react";

export function TabMenu(props) {
  const {
    navTabsClasses,
    navTabsId,
    navItemClasses,
    navItemId,
    navItemHref,
    ariaControls,
    navItemTitle,
    tabContentClasses,
    tabContentId,
    tabPaneClasses,
    tabPaneId,
    arialLabelledby
  } = props;
  return (
    <>
      <nav>
        <div className={`nav nav-tabs ${navTabsClasses} `} id={navTabsId} role="tablist">
          <a
            className={`nav-item nav-link ${navItemClasses}`}
            id={navItemId}
            data-toggle="tab"
            href={navItemHref}
            role="tab"
            aria-controls={ariaControls}
            aria-selected="true"
          >
            {navItemTitle}
          </a>
        </div>
      </nav>
      <div className={`tab-content ${tabContentClasses}`} id={tabContentId}>
        <div className={`tab-pane fade ${tabPaneClasses}`} id={tabPaneId} role="tabpanel" aria-labelledby={arialLabelledby}></div>
      </div>
    </>
  );
}
