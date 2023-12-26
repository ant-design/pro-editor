import {
  AndroidOutlined,
  ChromeOutlined,
  CloudOutlined,
  CodeSandboxOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Space, Tag } from 'antd';

const DefaultLayoutProps = {
  header: {
    iconConfig: {
      icon: <MenuUnfoldOutlined />,
      title: 'EditorLayout',
      dropdown: {
        menu: {
          items: [
            {
              key: '1',
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pro-editor.antdigital.dev/"
                >
                  关于 Ant Desgin Pro Editor
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer">
                  全部显示
                </a>
              ),
              icon: <SmileOutlined />,
              disabled: true,
            },
            {
              key: 'github',
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/pro-editor"
                >
                  GitHub
                </a>
              ),
              icon: <GithubOutlined />,
            },
          ],
        },
      },
    },
  },
  footer: {
    extra: (
      <Space size={[0, 8]} wrap>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Space>
    ),
    iconConfig: {
      icon: <CloudOutlined />,
      dropdown: {
        menu: {
          items: [
            {
              key: '1',
              label: 'Build with Android',
              icon: <AndroidOutlined />,
            },
            {
              key: '2',
              label: 'Run in Chrome',
              icon: <ChromeOutlined />,
            },
            {
              key: 'github',
              label: 'CodeSandBox',
              icon: <CodeSandboxOutlined />,
            },
          ],
        },
      },
    },
  },
};

export { DefaultLayoutProps };
