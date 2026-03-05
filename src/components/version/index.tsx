import packageJson from '../../../package.json';

export default function VersionComponent() {
    return `v${packageJson.version}`;
}