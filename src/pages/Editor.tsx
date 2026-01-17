import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReactToPrint } from 'react-to-print';
import {
  ArrowLeft,
  Printer,
  RotateCcw,
  Save,
  ZoomIn,
  ZoomOut,
  Download,
} from 'lucide-react';
import CoverPageEditor from '@/components/CoverPageEditor';
import AssignmentTemplate from '@/components/templates/AssignmentTemplate';
import LabReportTemplate from '@/components/templates/LabReportTemplate';
import ForumTemplate from '@/components/templates/ForumTemplate';
import HomeworkTemplate from '@/components/templates/HomeworkTemplate';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

import {
  CoverPageData,
  defaultCoverPageData,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
} from '@/lib/storage';

const Editor = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const styleParam = parseInt(searchParams.get('style') || '1');

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isBengali = i18n.language === 'bn';

  const printContentRef = useRef<HTMLDivElement>(null);
  const templateRef = useRef<HTMLDivElement>(null);

  /* ---------------- DATA ---------------- */
  const [data, setData] = useState<CoverPageData>(loadFromLocalStorage);
  const [style, setStyle] = useState(styleParam);

  /* ---------------- PREVIEW TRANSFORM ---------------- */
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setData(loadFromLocalStorage());
    if (window.innerWidth > 1024) setScale(0.6);
  }, []);

  /* ---------------- PREVENT BROWSER ZOOM ---------------- */
  useEffect(() => {
    const el = printContentRef.current;
    if (!el) return;

    const wheelHandler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.06 : -0.06;
        setScale(prev => Math.min(1.3, Math.max(0.2, prev + delta)));
      }
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    return () => el.removeEventListener('wheel', wheelHandler);
  }, []);

  /* ---------------- TEMPLATE RENDER ---------------- */
  const renderTemplate = () => {
    const props = { data, style };
    switch (type) {
      case 'assignment': return <AssignmentTemplate {...props} />;
      case 'labReport': return <LabReportTemplate {...props} />;
      case 'forum': return <ForumTemplate {...props} />;
      case 'homework': return <HomeworkTemplate {...props} />;
      default: return <AssignmentTemplate {...props} />;
    }
  };

  /* ---------------- PRINT ---------------- */
  const handlePrint = useReactToPrint({
    contentRef: templateRef,
    documentTitle: `${type}-cover-page`,
  });

  /* ---------------- DOWNLOAD PDF ---------------- */
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!templateRef.current || isDownloading) return;

    setIsDownloading(true);
    toast({
      title: isBengali ? 'তৈরি হচ্ছে...' : 'Preparing...',
      description: isBengali ? 'অপেক্ষা করুন' : 'Please wait',
    });

    try {
      // Dynamically import libraries
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const domToImage = (await import('dom-to-image')).default;

      const element = templateRef.current;

      // Create a wrapper
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'width: 794px; height: 1123px; background: white;';
      
      // Clone the element
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.width = '794px';
      clone.style.height = '1123px';
      clone.style.background = 'white';
      
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Use dom-to-image for better rendering
      const dataUrl = await domToImage.toPng(wrapper, {
        quality: 1,
        bgcolor: '#ffffff',
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        }
      });

      document.body.removeChild(wrapper);

      // Create canvas from data URL
      const img = new Image();
      img.src = dataUrl;
      
      await new Promise((resolve) => { img.onload = resolve; });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const imgHeight = (img.height * imgWidth) / img.width;

      pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${type}-cover-page.pdf`);

      toast({
        title: isBengali ? 'সফল!' : 'Success!',
        description: isBengali ? 'ফাইল ডাউনলোড হয়েছে' : 'File downloaded',
      });
    } catch (error) {
      console.error('Download error:', error);
      // Fallback to html2canvas
      try {
        const html2canvas = (await import('html2canvas')).default;
        const { jsPDF } = await import('jspdf');
        
        const element = templateRef.current;
        
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position: fixed; left: 0; top: 0; width: 794px; background: white;';
        const clone = element.cloneNode(true) as HTMLElement;
        clone.style.cssText = 'width: 794px; background: white;';
        wrapper.appendChild(clone);
        document.body.appendChild(wrapper);
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const canvas = await html2canvas(wrapper, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
        });
        
        document.body.removeChild(wrapper);
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${type}-cover-page.pdf`);
        
        toast({
          title: isBengali ? 'সফল!' : 'Success!',
          description: isBengali ? 'ফাইল ডাউনলোড হয়েছে' : 'File downloaded',
        });
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
        toast({
          title: isBengali ? 'সমস্যা!' : 'Error!',
          description: isBengali ? 'ডাউনলোড ব্যর্থ হয়েছে' : 'Download failed',
          variant: 'destructive',
        });
      }
    } finally {
      setIsDownloading(false);
    }
  };

  /* ---------------- ACTIONS ---------------- */
  const handleSave = () => {
    saveToLocalStorage(data);
    toast({
      title: isBengali ? 'সংরক্ষিত!' : 'Saved!',
      description: isBengali ? 'আপনার তথ্য সংরক্ষণ করা হয়েছে' : 'Your data has been saved',
    });
  };

  const handleReset = () => {
    clearLocalStorage();
    setData(defaultCoverPageData);
    setPosition({ x: 20, y: 20 });
    toast({
      title: isBengali ? 'রিসেট!' : 'Reset!',
      description: isBengali ? 'সব তথ্য মুছে ফেলা হয়েছে' : 'All data cleared',
    });
  };

  /* ---------------- DRAG & TOUCH LOGIC ---------------- */
  const startDragging = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStart.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const moveDragging = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    setPosition({
      x: clientX - dragStart.current.x,
      y: clientY - dragStart.current.y,
    });
  };

  const stopDragging = () => setIsDragging(false);

  const templateTitle = {
    assignment: t('assignment'),
    labReport: t('labReport'),
    forum: t('forum'),
    homework: t('homework'),
  }[type || 'assignment'];

  const styleNames = [t('style1'), t('style2'), t('style3'), t('style4')];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* TOP BAR: Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate('/templates')}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                {t('back')}
              </Button>
              <h1 className="text-xl md:text-2xl font-bold truncate">
                {templateTitle} {isBengali ? 'এডিটর' : 'Editor'}
              </h1>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="flex-1 md:flex-none" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-1" /> {t('reset')}
              </Button>
              <Button variant="outline" size="sm" className="flex-1 md:flex-none" onClick={handleSave}>
                <Save className="w-4 h-4 mr-1" /> {t('save')}
              </Button>
              {/* Download button for mobile/tablet */}
              <Button
                id="download-btn"
                size="sm"
                className="flex-1 md:flex-none md:hidden"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="w-4 h-4 mr-1" />
                {isDownloading ? (isBengali ? 'হচ্ছে...' : '...') : (isBengali ? 'ডাউনলোড' : 'Download')}
              </Button>
              {/* Print button for desktop */}
              <Button id="print-btn" size="sm" className="flex-1 md:flex-none hidden md:inline-flex" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-1" /> {t('print')}
              </Button>
            </div>
          </div>

          {/* STYLE & ZOOM CONTROLS */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div id="style-selector" className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
              {[1, 2, 3, 4].map(s => (
                <Button
                  key={s}
                  size="sm"
                  variant={style === s ? 'default' : 'outline'}
                  onClick={() => setStyle(s)}
                  className="whitespace-nowrap"
                >
                  {styleNames[s - 1]}
                </Button>
              ))}
            </div>

            <div id="zoom-controls" className="flex items-center gap-3 bg-muted/50 p-1.5 rounded-full border">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full"
                onClick={() => setScale(s => Math.max(0.2, s - 0.1))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-xs font-mono w-10 text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full"
                onClick={() => setScale(s => Math.min(1.3, s + 0.1))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">

            {/* EDITOR PANEL: Order 2 on mobile, 1 on desktop if needed */}
            <div id="editor-form" className="lg:col-span-4 xl:col-span-3 bg-card border rounded-2xl p-6 h-auto lg:h-[calc(100vh-200px)] overflow-y-auto shadow-sm order-2 lg:order-1 hide-scrollbar">
              <CoverPageEditor
                data={data}
                onChange={setData}
                templateType={type || 'assignment'}
              />
            </div>

            {/* PREVIEW PANEL */}
            <div id="preview-area"
              className="lg:col-span-6 xl:col-span-7 bg-muted/30 border rounded-2xl relative overflow-hidden h-[500px] md:h-[600px] lg:h-[calc(100vh-200px)] shadow-inner touch-none order-1 lg:order-2"
            >
              <div
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => startDragging(e.clientX, e.clientY)}
                onMouseMove={(e) => moveDragging(e.clientX, e.clientY)}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={(e) => startDragging(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchMove={(e) => moveDragging(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchEnd={stopDragging}
              >
                <div ref={printContentRef}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: '0 0',
                    width: 'fit-content',
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                  }}
                >
                  <div ref={templateRef} className="template-container">
                    {renderTemplate()}
                  </div>
                </div>
              </div>

              {/* Mobile Hint */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded md:hidden pointer-events-none">
                Drag to pan • Use +/- to zoom
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;