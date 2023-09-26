import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {PLANET_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = 'dy 前端路上的第一关';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Home',
          title: '档案馆',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'WA-TLE',
          href: PLANET_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
