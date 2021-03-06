import './extension/sw-product/component/sw-product-cross-selling-form';
import './extension/sw-product/view/sw-product-detail-cross-selling';
import './extension/sw-product/page/sw-product-detail';
import './extension/sw-settings/sw-property-multi-select';

Shopware.Module.register('kware-product-compare', {
    type: 'plugin',
    name: 'KwareProductCompare',
    title: 'kware-product-compare.generalInformation.mainMenuItemGeneral',
    description: 'kware-product-compare.generalInformation.descriptionTextModule',
    version: '1.1.0',
    targetVersion: '1.1.0',
    color: '#9AA8B5',
    icon: 'default-shopping-paper-bag'
});
