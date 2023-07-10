import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ButtonDownloadProps {
    className?: string;
}

export const ButtonDownloadСv = ({ className }: ButtonDownloadProps) => {
    const { t, i18n } = useTranslation('main');
    var res = "0;test0\n1;test1\n2;test2";

    const downloadCV = () => {
        var data = new Blob([res], {
            type: 'text/csv'
          }),
          csvURL = window.URL.createObjectURL(data),
          tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'myCSVFile.csv');
        tempLink.click();    }

// создать временно скачивание резюме с gooledisk по способу скачивания тем у кого ссылка есть.
// позже прикрутить бэк для скачивания по ссылке 


    return (
        <Button
            className={classNames('', {}, [className ? className : '' ])}
            theme={ThemeButton.CLEAR}
            onClick={downloadCV}
        >
            {t('Скачать резюме')}
        </Button>
    );
};
