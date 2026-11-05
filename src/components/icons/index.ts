/** İkon xəritəsi — mobil `glam-mobile/src/constants/icons.ts` ilə eyni adlar. */
import MailIcon from "./MailIcon";
import LockIcon from "./LockIcon";
import ShoppingBagIcon from "./ShoppingBagIcon";
import EyeIcon from "./EyeIcon";
import EyeOffIcon from "./EyeOffIcon";
import BuyerIcon from "./BuyerIcon";
import StoreIcon from "./StoreIcon";
import StoresIcon from "./StoresIcon";
import GoBackIcon from "./GoBackIcon";
import AzFlagIcon from "./AzFlagIcon";
import AzeFlagIcon from "./AzeFlagIcon";
import EngFlagIcon from "./EngFlagIcon";
import RuFlagIcon from "./RuFlagIcon";
import HomeIcon from "./HomeIcon";
import SearchIcon from "./SearchIcon";
import ChatIcon from "./ChatIcon";
import HeartIcon from "./HeartIcon";
import ProfileIcon from "./ProfileIcon";
import BellIcon from "./BellIcon";
import FilterIcon from "./FilterIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import HangerIcon from "./HangerIcon";
import PlusIcon from "./PlusIcon";
import ListingsIcon from "./ListingsIcon";
import StarIcon from "./StarIcon";
import GlobeIcon from "./GlobeIcon";
import HelpIcon from "./HelpIcon";
import LogoutIcon from "./LogoutIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import EditIcon from "./EditIcon";
import ListIcon from "./ListIcon";
import PinIcon from "./PinIcon";
import SettingIcon from "./SettingIcon";
import SendIcon from "./SendIcon";
import PaperclipIcon from "./PaperclipIcon";
import ChevronLeftIcon from "./ChevronLeftIcon";
import InfoIcon from "./InfoIcon";
import CloseIcon from "./CloseIcon";
import ClockIcon from "./ClockIcon";
import CalendarIcon from "./CalendarIcon";
import CheckIcon from "./CheckIcon";
import MoonIcon from "./MoonIcon";
import BookMarkIcon from "./BookMarkIcon";
import VerifiedBadgeIcon from "./VerifiedBadgeIcon";
import MoreVerticalIcon from "./MoreVerticalIcon";
import MapPinIcon from "./MapPinIcon";
import InfoCircleIcon from "./InfoCircleIcon";
import CheckCircleIcon from "./CheckCircleIcon";
import AlertCircleIcon from "./AlertCircleIcon";
import TagIcon from "./TagIcon";
import GridIcon from "./GridIcon";
import DressIcon from "./DressIcon";
import ShirtIcon from "./ShirtIcon";
import CoatIcon from "./CoatIcon";
import HeelIcon from "./HeelIcon";
import HandBagIcon from "./HandBagIcon";

export const icons = {
  mail: MailIcon,
  lock: LockIcon,
  shoppingBag: ShoppingBagIcon,
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  buyer: BuyerIcon,
  store: StoreIcon,
  stores: StoresIcon,
  goBack: GoBackIcon,
  azFlag: AzFlagIcon,
  azeFlag: AzeFlagIcon,
  engFlag: EngFlagIcon,
  ruFlag: RuFlagIcon,
  home: HomeIcon,
  search: SearchIcon,
  chat: ChatIcon,
  heart: HeartIcon,
  profile: ProfileIcon,
  bell: BellIcon,
  filter: FilterIcon,
  chevronDown: ChevronDownIcon,
  hanger: HangerIcon,
  plus: PlusIcon,
  listings: ListingsIcon,
  star: StarIcon,
  globe: GlobeIcon,
  help: HelpIcon,
  logout: LogoutIcon,
  chevronRight: ChevronRightIcon,
  edit: EditIcon,
  list: ListingsIcon,
  listItem: ListIcon,
  pin: PinIcon,
  settings: SettingIcon,
  send: SendIcon,
  paperclip: PaperclipIcon,
  chevronLeft: ChevronLeftIcon,
  info: InfoIcon,
  close: CloseIcon,
  clock: ClockIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  moon: MoonIcon,
  bookmark: BookMarkIcon,
  verifiedBadge: VerifiedBadgeIcon,
  moreVertical: MoreVerticalIcon,
  mapPin: MapPinIcon,
  infoCircle: InfoCircleIcon,
  checkCircle: CheckCircleIcon,
  alertCircle: AlertCircleIcon,
  tag: TagIcon,
  grid: GridIcon,
  dress: DressIcon,
  shirt: ShirtIcon,
  coat: CoatIcon,
  heel: HeelIcon,
  handbag: HandBagIcon,
} as const;

export type IconName = keyof typeof icons;
