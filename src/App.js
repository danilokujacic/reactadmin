import React, {
  cloneElement,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import IconEvent from "@material-ui/icons/Event";
import ShowBlade from "./showBlade";
import CloseIcon from "@material-ui/icons/Close";
import { animated, useSpring } from "react-spring";
import "./app.css";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  EditButton,
  ListGuesser,
  RichTextField,
  ReferenceField,
  Datagrid,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
  List,
} from "react-admin";
const BladeContext = createContext([{}, () => {}]);

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Blade = () => {
  const [blade, setBlade] = useContext(BladeContext);
  const open = Boolean(blade);
  const props = useSpring({
    config: { duration: 120 },
    from: {
      width: open ? "0%" : "80%",
    },
    to: {
      width: open ? "80%" : "0%",
    },
  });
  useEffect(() => console.log(blade), [blade]);
  return (
    <animated.div style={props} className='blade-info'>
      {open ? (
        <>
          <div className='blade-header'>
            <h1>{blade.title}</h1>
            <CloseIcon onClick={() => setBlade(null)} />
          </div>
          <div className='blade-body'>{blade.body}</div>
        </>
      ) : null}
    </animated.div>
  );
};
const App = () => {
  const bladeContext = useState(null);
  return (
    <BladeContext.Provider value={bladeContext}>
      <Admin dataProvider={dataProvider}>
        <Resource name='posts' show={PostShow} list={PostList} />
      </Admin>
      <Blade />
    </BladeContext.Provider>
  );
};

const ListActions = ({
  currentSort,
  className,
  resource,
  filters,
  displayedFilters,
  exporter, // you can hide ExportButton if exporter = (null || false)
  filterValues,
  permanentFilter,
  hasCreate, // you can hide CreateButton if hasCreate = false
  basePath,
  selectedIds,
  onUnselectItems,
  showFilter,
  maxResults,
  total,
  ...rest
}) => (
  <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
    {filters &&
      cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: "button",
      })}
    <CreateButton basePath={basePath} />
    <ExportButton
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={{ ...filterValues, ...permanentFilter }}
      exporter={exporter}
      maxResults={maxResults}
    />
    {/* Add your custom actions */}
    <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label='Show calendar'>
      <IconEvent />
    </Button>
  </TopToolbar>
);
export const PostList = (props) => {
  const [blade, setBlade] = useContext(BladeContext);
  const trigerBlade = (...args) => {
    const [, , item] = args;
    setBlade(item);
  };
  return (
    <List {...props} actions={<ListActions />}>
      <Datagrid
        rowClick={(id, basePath, record) => trigerBlade(id, basePath, record)}>
        <ReferenceField source='userId' reference='users'>
          <TextField source='id' />
        </ReferenceField>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='body' />
      </Datagrid>
    </List>
  );
};
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='title' />
      <TextField source='teaser' />
      <RichTextField source='body' />
      <DateField label='Publication date' source='created_at' />
    </SimpleShowLayout>
  </Show>
);
export default App;
