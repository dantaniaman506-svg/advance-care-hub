import { Clock } from "lucide-react";

export function OpeningHours() {
  return (
    <div className="rounded-2xl bg-navy text-navy-foreground p-6">
      <div className="flex items-center gap-2 text-white">
        <Clock className="h-5 w-5 text-primary" />
        <h4 className="text-white text-base font-semibold">Opening Hours</h4>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-white/80">Mon – Sun</span>
          <span className="text-white">Closes 7:00 PM</span>
        </div>
        <p className="text-xs text-white/60 pt-1">
          Open all 7 days. Opening time pending confirmation.
        </p>
      </div>
    </div>
  );
}
