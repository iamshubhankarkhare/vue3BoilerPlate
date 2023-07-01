import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'ant-design-vue/dist/antd.css'
import {
    Button,
    Input,
    Spin,
    Layout,
    Menu,
    Tabs,
    Avatar,
    Dropdown,
    Collapse,
    Checkbox,
    Tooltip,
    Select,
    Tree,
    TreeSelect,
    Popover,
    Steps,
    message,
    Modal,
    Form,
    Radio,
    Divider,
    InputNumber,
    Switch,
    Alert,
    Progress,
    Table,
    Upload,
    Drawer,
    List,
    Cascader,
    Badge,
    Tag,
    Timeline,
    Pagination,
    DatePicker,
    TimePicker,
    Popconfirm,
    Empty,
    Typography,
    Image,
    Row,
    Col,
    Result,
} from 'ant-design-vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Alert)
app.use(Avatar)
app.use(Badge)
app.use(Button)
app.use(Cascader)
app.use(Checkbox)
app.use(Collapse)
app.use(DatePicker)
app.use(Divider)
app.use(Drawer)
app.use(Dropdown)
app.use(Empty)
app.use(Form)
app.use(Image)
app.use(Input)
app.use(InputNumber)
app.use(Layout)
app.use(List)
app.use(Menu)
app.use(Modal)
app.use(Pagination)
app.use(Popconfirm)
app.use(Popover)
app.use(Progress)
app.use(Radio)
app.use(Select)
app.use(Spin)
app.use(Steps)
app.use(Switch)
app.use(Table)
app.use(Tabs)
app.use(Tag)
app.use(TimePicker)
app.use(Timeline)
app.use(Tooltip)
app.use(Tree)
app.use(TreeSelect)
app.use(Typography)
app.use(Upload)
app.use(Row)
app.use(Col)
app.use(Result)
app.config.globalProperties.$message = message

// ant d components
console.log('app', app)
app.mount('#app')
